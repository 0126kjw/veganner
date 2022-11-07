import styled, { css } from "styled-components";

export const WholeLayout = styled.div`
  width: 393px;
  margin: 0 auto;
  margin-top: 10%;
  position: relative;
`;

export const LayoutForm = styled.form`
  width: 393px;
  margin: 0 auto;
  margin-top: 5%;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 393px;
  margin: 0 auto;
  margin-top: 10%;
  position: relative;
`;

export const RegisterTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #212121;
  margin-bottom: 5%;
  width: 393px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const LoginForm = styled.form`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const Clear = styled.div`
  clear: both;
`;

export const Position = styled.div`
  position: relative;
  width: 393px;
  margin: 0 auto;
`;

export const RegisterBox = styled.input`
  width: 378px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  position: relative;
  margin-bottom: 3%;
  padding-left: 20px;
  :focus {
    outline: none;
  }
`;

export const SameBox = styled.button`
  width: 80px;
  height: 35px;
  background: #b6b6b6;
  border-radius: 50px;
  border: none;
  color: white;
  position: absolute;
  right: 0;
  cursor: pointer;
  position: absolute;
  top: 86px;
  right: 0;
  z-index: 999;
  margin-top: 4px;
`;

export const PasswordBox = styled.input`
  width: 378px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  position: relative;
  margin-bottom: 3%;
  margin-top: 2%;
  padding-left: 20px;
  :focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 394px;
  height: 51px;
  background: #b6b6b6;
  border-radius: 25px;
  color: white;
  display: block;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  font-size: 18px;
  border: none;
  margin-top: 3%;
`;

export const RegisterButton = styled.button`
  width: 394px;
  height: 51px;
  background: #004d43;
  border-radius: 25px;
  color: white;
  display: block;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  font-size: 18px;
  margin-bottom: 2%;
  margin-top: 10%;
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
`;
