import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Vacinas = () => {
  const { signout, getUbsWithVacinas, vacinasList } = useAuth();
  const navigate = useNavigate();

  // Use local state to manage vacinasList
  const [vacinasData, setVacinasData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getUbsWithVacinas();
      console.log("Vacinas List:", vacinasList);
      setVacinasData(vacinasList);
    };
    fetchData();
  }, [getUbsWithVacinas, vacinasList]);

  // Organize vacinas by their names
  const vacinasByName = vacinasData.reduce((acc, vac) => {
    acc[vac.vacina] = acc[vac.vacina] || [];
    acc[vac.vacina].push(vac.ubs);
    return acc;
  }, {});

  return (
    <C.Container>
      <C.Menu>
        <C.Title>UBS VAC</C.Title>
        <Button Text="Home" onClick={() => navigate("/home")} />
        <Button Text="Encontrar UBS" onClick={() => navigate("/ubs")} />
        <Button Text="Vacinas" onClick={() => navigate("/vacinas")} />
        <Button Text="Feedback" onClick={() => navigate("/feedback")} />
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}/>
      </C.Menu>
      <C.MainContent>
        <C.TitleVacinas>Lista de Vacinas Disponíveis</C.TitleVacinas>
        <C.VacinasList>
          {Object.entries(vacinasByName).map(([vacina, ubs]) => (
            <C.VacinaItem key={vacina}>
              <p><b>Vacina: {vacina}</b></p>
              <p><b>UBSs:</b></p>
              <ul>
                {ubs.map((ubsName, index) => (
                  <li key={index}>{ubsName}</li>
                ))}
              </ul>
            </C.VacinaItem>
          ))}
        </C.VacinasList>
      </C.MainContent>
    </C.Container>
  );
};

export default Vacinas;
