import styled from "styled-components";

// Container principal da página
export const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 30px;
  background-color: #f5f5f9;
`;

// Menu lateral
export const Menu = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-shadow: 0 1px 2px #0003;
  background-color: #f0f0f0;
  max-width: 400px;
  padding: 20px;
  border-radius: 2px;
`;

// Conteúdo principal da página
export const MainContent = styled.div`
  flex: 1;
  padding: 40px;  // Ajustado para um padding mais equilibrado
  overflow-y: auto;
`;

// Título principal da página
export const Title = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2B2B2E;
  padding: 10px;
`;

// Título específico para a lista de vacinas
export const TitleVacinas = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #2B2B2E;
  padding-bottom: 20px; // Ajustado para um espaçamento mais moderado
  text-align: left;
  display: block;
  margin-top: 40px; // Ajustado para um espaçamento mais equilibrado
  line-height: 1.6;
`;

// Item da lista de vacinas
export const VacinaItem = styled.div`
  margin-bottom: 20px; // Ajustado para um espaçamento mais visível
  padding: 15px;
  background-color: #ffffff; // Ajustado para destacar o item
  border-radius: 4px;
  box-shadow: 0 1px 2px #0003;
  
  p {
    margin: 5px 0;
  }
`;

// Lista de vacinas
export const VacinasList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; // Ajustado para um espaçamento mais uniforme
`;
