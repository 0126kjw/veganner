import styled, { css } from "styled-components";

export const WholeLayout = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const LoginTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #212121;
  margin-top: 17%;
`;

export const LoginForm = styled.form`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-top: 5%;
`;

export const LoginBox = styled.input`
  width: 370px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-left: 20px;
  :focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 394px;
  height: 51px;
  background: #004d43;
  border: none;
  border-radius: 25px;
  color: white;
  display: block;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  font-size: 18px;
  margin-top: 5%;
`;

export const RegisterButton = styled.button`
  width: 394px;
  height: 51px;
  background: #b6b6b6;
  border-radius: 25px;
  color: white;
  display: block;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  font-size: 18px;
  margin-top: 1.5%;
`;

export const KaKaoButton = styled.button`
  width: 394px;
  height: 51px;
  background: #fee500;
  border-radius: 25px;
  color: #1a1a1c;
  display: block;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  font-size: 18px;
  margin-top: 1.5%;
`;
