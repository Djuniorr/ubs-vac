import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Input from "../../components/Input";

const Vacinas = () => {
  const { signout, getUbsWithVacinas, vacinasList } = useAuth();
  const navigate = useNavigate();

  
  const [vacinasData, setVacinasData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      await getUbsWithVacinas();
      console.log("Vacinas List:", vacinasList);
      setVacinasData(vacinasList);
    };
    fetchData();
  }, [getUbsWithVacinas, vacinasList]);

  const filteredVacinas = vacinasData.filter((vac) =>
    vac.vacina.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const vacinasByName = filteredVacinas.reduce((acc, vac) => {
    acc[vac.vacina] = acc[vac.vacina] || [];
    acc[vac.vacina].push(vac.ubs);
    return acc;
  }, {});

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
        <C.BoxFilter>
          <Input
            type="text"
            placeholder="Digite o nome da vacina"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <C.CleaningButton onClick={() => setSearchTerm('')}>x</C.CleaningButton>
          )}
        </C.BoxFilter>
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
