import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { REDIRECT_URI, REST_API_KEY } from "./OAuth";
import userState from "../../atoms/user";
import { useSetRecoilState } from "recoil";

interface LoginData {
  email: string;
  password: string;

  [key: string]: string;
}

function KakaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const setUser = useSetRecoilState(userState);
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);

          fetch(`http://kdt-ai5-team01.elicecoding.com:5000/kakao/login/`, {
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_token: localStorage.getItem("token"),
            }),
          }).then((res) => {
            localStorage.clear();
            window.sessionStorage.setItem("email", "kakao");
            setUser({ email: "kakao.com", password: "" });
            navigate("/", { state: pathname });
          });
        } else {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return (
    <div>
      <p>카카오로 로그인 중입니다.</p>
      <p>잠시만 기다려 주세요...</p>
    </div>
  );
}

export default KakaoLogin;
