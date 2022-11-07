import { ChangeEvent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import userState from "../../atoms/user";
import * as Api from "../../api/api";
import { KAKAO_AUTH_URL } from "./OAuth";
import * as L from "./Login.styled";

interface LoginData {
  email: string;
  password: string;
  [key: string]: string;
}

function LoginForm() {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const validateEmail = (loginObj: LoginData) => {
    return loginObj.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(formData);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = formData.password.length >= 8;
  //
  // 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // "user/login" 엔드포인트로 post요청함.
      const res = await Api.post("login/", formData);
      // 유저 정보는 response의 data임.
      const user = res.data;
      setUser({ email: user.email, password: user.password });
      window.sessionStorage.setItem("email", user.email);

      // 기본 페이지로 이동함.
      // navigate("/", { state: pathname });
      // navigate("/", { replace: true });
      // 원래 있던 페이지로 이동
      navigate(-1);
    } catch (err) {
      alert("로그인에 실패하였습니다. 아이디와 비밀번호를 다시 확인해주세요");
    }
  };

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: LoginData) => {
      const newData = {
        ...prev,
        [name]: value,
      };

      return newData;
    });
  };
  // 카카오 로그인
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <L.WholeLayout>
      <L.LoginTitle>로그인</L.LoginTitle>
      <L.LoginForm onSubmit={handleSubmit}>
        <L.LoginBox
          type="email"
          placeholder="이메일을 입력하세요."
          name="email"
          value={formData.email}
          onChange={handleonChange}
        />
        {!isEmailValid && formData.email && (
          <div className="text-success">이메일 형식이 올바르지 않습니다.</div>
        )}
        <L.LoginBox
          type="password"
          placeholder="비밀번호를 입력하세요."
          name="password"
          value={formData.password}
          onChange={handleonChange}
        />
        {!isPasswordValid && formData.password && (
          <div className="text-success">비밀번호는 8글자 이상입니다.</div>
        )}
        <L.LoginButton type="submit" disabled={!isFormValid}>
          로그인
        </L.LoginButton>
        <L.RegisterButton onClick={() => navigate("/register")}>
          회원가입하기
        </L.RegisterButton>
        {/* <L.KaKaoButton type="button" onClick={kakaoLogin}>
          카카오로 로그인하기
        </L.KaKaoButton> */}
      </L.LoginForm>
    </L.WholeLayout>
  );
}

export default LoginForm;
