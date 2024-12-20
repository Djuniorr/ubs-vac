import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await signin(email, senha);

    if (res) {
      console.log(res);

      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.ContentPrimario>
        <C.ContentCabecalho>
          <C.Label>UBS VAC</C.Label>
          <C.LabelWelcome>Insira Suas Informações Para Entrar</C.LabelWelcome>
        </C.ContentCabecalho>

        <C.ContentDados>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Inscreva-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.ContentDados>
      </C.ContentPrimario>
    </C.Container>
  );
};

export default Signin;
