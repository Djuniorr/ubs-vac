import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout, getUbs, getUbsWithVacinas  } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Menu>
        <C.Title>UBS VAC</C.Title>
        <Button Text="Home" onClick={() => [getUbs(), navigate("/home")]} />
        <Button Text="Encontrar UBS" onClick={() => [getUbs(), navigate("/ubs")]} />
        <Button Text="Vacinas" onClick={() => [getUbsWithVacinas(), navigate("/vacinas")]} />
        <Button Text="Feedback" onClick={() => [signout(), navigate("/feedback")]} />
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
      </C.Menu>
      <C.MainContent>
        <C.Subtitle>Requisitos / Documentos necessários</C.Subtitle>
        <C.Paragraph>Recomenda-se apresentar documento de identificação.</C.Paragraph>
        <C.Subtitle>Principais Etapas do Serviço</C.Subtitle>
        <C.Paragraph>Todo paciente é avaliado na chegada para identificação das necessidades e direcionado para atendimento no dia ou agendamento. </C.Paragraph>
        <C.Subtitle>Previsão de prazo para realização do serviço</C.Subtitle>
        <C.Paragraph>Dependerá da quantidade de pessoas aguardando. A maior parte dos atendimentos é realizado no dia, sem precisar de agendamento.</C.Paragraph>
        <C.Subtitle>Serviços</C.Subtitle>
        <C.Paragraph>Nas UBSs é possível receber atendimentos nas áreas da pediatria, ginecologia, clínica geral, enfermagem, nutricionista, odontologia e assistência social.</C.Paragraph>
      </C.MainContent>
    </C.Container>
  );
};

export default Home;
