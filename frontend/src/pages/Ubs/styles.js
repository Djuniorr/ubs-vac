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
  padding: 100px;
  overflow-y: auto;
`;

export const Title = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2B2B2E;
  padding: 10px;
`;

export const TitleUbs = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #2B2B2E;
  padding-bottom: 40px;
  text-align: left;
  display: block;
  margin-top: 60px;
  line-height: 1.6;
`;

export const UbsItem = styled.div`
  margin-bottom: 2px;
  padding: 15px;
  background-color: #f5f5f9;

  p {
    margin: 5px 0;
  }
`;

export const UbsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const BoxFilter = styled.div`
  display: flex;
  flexDirection: column;
  width: full;
  padding: 14px;
`;

export const CleaningBotton = styled.button`
  margin-left: 14px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #2B2B2E;
  font-weight: bold;
`;