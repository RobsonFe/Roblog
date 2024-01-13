// eslint-disable-next-line

import { db } from '../firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


import { useState, useEffect } from 'react'

export const useAuthentication =() =>{

    const[error, setError] =useState(null);
    const [loading, setLoading] = useState(null);

    //cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {

        if(cancelled) {

            return;
        }
    };

    const createUser = async (data) => {
        checkIfIsCancelled();
        
        setLoading(true);
        setError(null);
    
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
    
            await updateProfile(user, {
                displayName: data.displayName
            });
            setLoading(false);
            toast.success("Cadastro realizado com sucesso!");
    
            // Retorna um objeto contendo o usuário e outros dados se necessário
            return { user, otherData: "alguma informação adicional" };
        } catch (error) {
            console.error(error);
    
            if (error.message.includes("Password")) {
                toast.error("A senha precisa conter pelo menos 6 caracteres");
            } else if (error.message.includes("email-already")) {
                toast.error("E-mail já cadastrado");
            } else {
                setLoading(false);
                toast.error("Ocorreu um erro, tente mais tarde");
            }
            return { error };
        }
    };


    useEffect(()=>{
        return () => setCancelled(true);
    }, []);

    return{
       auth,
       createUser,
       error,
       loading, 
    };

}