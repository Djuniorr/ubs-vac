import React, { useEffect, useState } from "react";
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
        <C.ContentMenu>
          Ubs Vac
        </C.ContentMenu>
        <C.ContentMenu>
          <Button Text="Home" onClick={() => [getUbs(), navigate("/home")]} />
        </C.ContentMenu>
        <C.ContentMenu>
          <Button Text="Encontrar UBS" onClick={() => [getUbs(), navigate("/ubs")]} />
        </C.ContentMenu>
        <C.ContentMenu>
          <Button Text="Vacinas" onClick={() => [getUbsWithVacinas(), navigate("/vacinas")]} />
        </C.ContentMenu>
        <C.ContentMenu>
          <Button Text="Feedback" onClick={() => [signout(), navigate("/feedback")]} />
        </C.ContentMenu>
        <C.ContentMenu>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
        </C.ContentMenu>
      </C.Menu>

      <C.MainContainer>
        <C.MainContent>
          <C.TitleUbs>Confira as UBS de Caxias do Sul - RS</C.TitleUbs>
          <C.Div>Pesquise a UBS que deseja ver as informações ou navegue para encontrar:</C.Div>
          <C.BoxFilter>
            <Input
              type="nome"
              placeholder="Ex.: Centenário"
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
      </C.MainContainer>
    </C.Container>
  );
};

export default Ubs;
