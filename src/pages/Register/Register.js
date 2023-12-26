import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();
    setError("");

    const dados = {
      nomeUsuario,
      email,
      senha,
    };

    if (senha !== confirmPassword) {
      toast.error("As senhas precisam ser iguais!");
    } else {
      // Lógica para processar o formulário quando as senhas coincidem
      console.log(dados);
      toast.success("Cadastro realizado com sucesso!");
    }
  };

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
          <button className="btn btn-primary" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
