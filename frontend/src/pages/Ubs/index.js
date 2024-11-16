import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth"; 
import * as C from "./styles";
import Input from "../../components/Input";

const Ubs = () => {
  const { signout, getUbs, ubsList, userLocation, getUbsWithVacinas } = useAuth(); 
  const [nome, setNome] = useState("");
  const [filteredUbs, setFilteredUbs] = useState([]); 
  const navigate = useNavigate();

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const clearInput = () => {
    setNome('');
  };

  useEffect(() => {
    getUbs();
  }, [getUbs]);

  const filteredList = ubsList.filter((ubs) => ubs.nome.toLowerCase().includes(nome.toLowerCase()));
  
  const sortedUbs = filteredList
    .map((ubs) => {
      const lat1 = userLocation.latitude.latitude;
      const lon1 = userLocation.latitude.longitude;
      const lat2 = parseFloat(ubs.latitude.trim());
      const lon2 = parseFloat(ubs.longitude.trim());
      const distance = calculateDistance(lat1, lon1, lat2, lon2);
      return { ...ubs, distance };
    })
    .sort((a, b) => a.distance - b.distance); 
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
            {sortedUbs.map((ubs) => {
              return (
                <C.UbsItem key={ubs.id}>
                  <p><b>UBS decodeText({ubs.nome})</b></p>
                  <p><b>Endereço:</b> decodeText({ubs.endereco})</p>
                  <p><b>Horário:</b> De segunda à sexta das decodeText({ubs.horario_atendimento}).</p>
                  <p><b>Telefone:</b> {ubs.telefone}</p>
                  <p><b>Distância:</b> {ubs.distance.toFixed(2)} km</p>
                </C.UbsItem>
              );
            })}
          </C.UbsList>
        </C.MainContent>
      </C.MainContainer>
    </C.Container>
  );
};

export default Ubs;
