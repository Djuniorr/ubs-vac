import React, { useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Ubs = () => {
  const { signout, getUbs, ubsList, getUbsWithVacinas } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getUbs();
  }, [getUbs]);

  return (
    <C.Container>
      <C.Menu>
        <C.Title>UBS VAC</C.Title>
        <Button Text="Home" onClick={() => [getUbs(), navigate("/home")]} />
        <Button Text="Encontrar UBS" onClick={() => [getUbs(), navigate("/home")]} />
        <Button Text="Vacinas" onClick={() => [getUbsWithVacinas(), navigate("/vacinas")]} />
        <Button Text="Feedback" onClick={() => [signout(), navigate("/feedback")]} />
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
      </C.Menu>
      <C.MainContent>
      <C.TitleUbs>Lista de UBS em Caxias do Sul - RS</C.TitleUbs>
      <C.UbsList>
        {ubsList.map((ubs) => (
          <C.UbsItem key={ubs.id}>
            <p><b>UBS {ubs.nome}</b></p>
            <p><b>Endereço:</b> {ubs.endereco}</p>
            <p><b>Horário:</b> De segunda à sexta das {ubs.horario_atendimento}.</p>
            <p><b>Telefone:</b> {ubs.telefone}</p>
          </C.UbsItem>
        ))}
      </C.UbsList>
    </C.MainContent>
    </C.Container>
  );
};

export default Ubs;
