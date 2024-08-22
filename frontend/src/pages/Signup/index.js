import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [visualizarSenha, setVisualizarSenha] = useState(false);
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const passwordVisibility = () => {
    setVisualizarSenha(!visualizarSenha);
  };

  const handleSignup = async () => {
    if (!email | !emailConf | !senha | !senhaConf) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf || senha !== senhaConf) {
      setError("Os campos não são iguais");
      return;
    }

    const res = await signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    toast.success("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.LabelWelcome>FAÇA SEU CADASTRO</C.LabelWelcome>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <C.PasswordWrapper>
          <Input
            type={visualizarSenha ? "text" : "password"}
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.PasswordButton onClick={passwordVisibility}>
            {visualizarSenha ? <FaEyeSlash /> : <FaEye />}
          </C.PasswordButton>
        </C.PasswordWrapper>
        <C.PasswordWrapper>
          <Input
            type={visualizarSenha ? "text" : "password"}
            placeholder="Confirme sua Senha"
            value={senhaConf}
            onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
          />
          <C.PasswordButton onClick={passwordVisibility}>
            {visualizarSenha ? <FaEyeSlash /> : <FaEye />}
          </C.PasswordButton>
        </C.PasswordWrapper>
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
