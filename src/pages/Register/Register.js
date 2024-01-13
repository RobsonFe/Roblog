// eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthentication } from '../../hooks/useAuthentication';

function Register() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error:authError, loading} = useAuthentication();

  const cadastrar = async (e) => {
    e.preventDefault();
    setError("");

    const dados = {
        nomeUsuario,
        email,
        senha,
        displayName: nomeUsuario
    };

    try {

      if (senha.length < 6) {
        toast.error("A senha precisa conter pelo menos 6 caracteres");
      } else if (senha !== confirmPassword) {
        toast.error("As senhas precisam ser iguais!");
      } else {
        const res = await createUser({ ...dados, password: senha });
        console.log("Dados do usuário:", res);
      }

    } catch (error) {
        console.error("Erro ao criar usuário:", error.message);
    }
};


  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[setError])

  return (
    <div>
      <h1 className='fw-bold'>Cadastre-se</h1>

      <form className='container mt-5' onSubmit={cadastrar}>
        <div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nome"
              required
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
            />
            <label htmlFor="floatingInput">Nome</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingPassword"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingPassword">Email</label>
          </div>

          <div className="form-floating mb-3">
          <input
              type="password"
              className="form-control"
              id="floatingPassword1"
              placeholder="Digite sua senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="floatingPassword1">Senha</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword2"
              placeholder="Digite sua senha"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword2">Confirme sua senha</label>
          </div>
        </div>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        <div className="d-grid gap-2 col-6 mx-auto mt-3">
          {!loading && <button className="btn btn-primary" type="submit">
            Cadastrar
          </button> }
        
        {loading && (<button className="btn btn-primary" disabled type="submit">
            Aguarde...
          </button>)}
        </div>
      </form>
    </div>
  );
}

export default Register;
