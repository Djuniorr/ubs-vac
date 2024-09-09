import React, { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Input from "../../components/Input";

const Ubs = () => {
  const { signout, getUbs, ubsList, getUbsWithVacinas } = useAuth();
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const clearInput = () => {
    setNome('');
  }
  console.log(nome);
  
  useEffect(() => {
    getUbs();
  }, [getUbs]);

  const list = ubsList.filter((ubs) => ubs.nome.toLowerCase().includes(nome.toLowerCase()));

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
      <C.BoxFilter>
        <Input
          type="nome"
          placeholder="Digite sua UBS"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        {nome && (
          <C.CleaningBotton onClick={clearInput}>x</C.CleaningBotton>
        )}
      </C.BoxFilter>
      <C.UbsList>
        {list.map((ubs) => (
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
