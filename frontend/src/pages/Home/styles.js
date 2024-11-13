import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;    
  background-color: #FFF;
  height: 100vh;
`;

export const Menu = styled.div`
  display: grid;
  align-items: center;
  background-color: #657997;
  grid-template-columns: repeat(6, 1fr);
  height: 50px;
`;

export const ContentMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #FFF;
  background: #657997;
  font-size: 16px;
  border-right: 1px solid #FFF;
  text-transform: uppercase;

  &:last-child {
    border-right: none;
  }

  button{
    padding: 0;
    border-radius: unset;
    font-size: unset;
    max-width: unset;
    font-weight: unset;
    height: 100%;
  }
`;

export const MainContainer = styled.div`  
  padding: 10px;
  background: #eceff4;
  height: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;  
`;

export const ContainerDiv = styled.div`
  background: #FFF;
  border-radius: 6px;
  padding: 25px;

  > div:nth-child(1) {
    font-size: 25px;
    font-weight: bold;
  }
  
  > div:nth-child(2) {
    font-size: 18px;
    text-align: justify;
  }
`;

export const ContentDiv = styled.div`
  
`
