import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const MainContent = styled.div`
  padding: 15px;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
    border-radius: 4px;
`;

export const Content = styled.div`
  gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`;

export const DivMain = styled.div`
  width: 300px;
  text-align: center;

  input{
    width: 260px;
  }  
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  padding: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const LabelWelcome = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2B2B2E;
  padding: 10px;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #323235;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  color: #323235
`;