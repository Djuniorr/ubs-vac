// src/pages/Vacinas/styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 30px;
  background-color: #f5f5f9;
`;

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

export const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

export const Title = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2B2B2E;
  padding: 10px;
`;

export const TitleVacinas = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #2B2B2E;
  padding-bottom: 20px;
  text-align: left;
  display: block;
  margin-top: 40px;
  line-height: 1.6;
`;

export const VacinaItem = styled.div`
  margin-bottom: 20px;
  padding: 15px 30px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 2px #0003;
  
  p {
    margin: 5px 0;
  }
`;

export const VacinasList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BoxFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CleaningButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #2B2B2E;
  font-weight: bold;
`;
