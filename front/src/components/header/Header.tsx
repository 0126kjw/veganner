import React from "react";
import * as S from "./Header.styled";
import userState from "../../atoms/user";
import { useRecoilValue, useResetRecoilState } from "recoil";
import * as Api from "../../api/api";
import { useNavigate } from "react-router-dom";

// interface HeaderProps {
//   src: string;
// }

function Header() {
  const userReset = useResetRecoilState(userState);
  const user = useRecoilValue(userState);
  const email = window.sessionStorage.getItem("email");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // "user/login" 엔드포인트로 post요청함.
      await Api.post("logout/");
      // 유저 정보는 response의 data임.
      userReset();
      window.sessionStorage.removeItem("email");
      navigate("/", { replace: true });
      alert("로그아웃 되었습니다");
      // 기본 페이지로 이동함.
    } catch (err) {
      console.error(err);
    }
  };

  // const isLogin = !!userState.user;
  return (
    <div>
      <S.HeaderWrapper>
        <S.HeaderLogo to="/" />
        <S.Navbar>
          <S.StyledLink to="/insight">Insights.</S.StyledLink>
          <S.StyledLink to="/board">Share.</S.StyledLink>
          <S.StyledLink to="/explore">Explore.</S.StyledLink>

          {email === null ? (
            <S.StyledLink to="/login">Login/Register.</S.StyledLink>
          ) : (
            <>
              <S.StyledLink to="/" onClick={handleLogout}>
                Logout.
              </S.StyledLink>
            </>
          )}
        </S.Navbar>
      </S.HeaderWrapper>
    </div>
  );
}

export default Header;
