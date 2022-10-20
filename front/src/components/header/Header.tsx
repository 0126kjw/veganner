import React from "react";
import * as S from "./Header.styled";
import userState from "../../atoms/user";
import { useRecoilValue, useResetRecoilState } from "recoil";
import * as Api from "../../api/api";

// interface HeaderProps {
//   src: string;
// }

function Header() {
  const userReset = useResetRecoilState(userState);
  const user = useRecoilValue(userState);

  const handleLogout = async () => {
    try {
      // "user/login" 엔드포인트로 post요청함.
      await Api.post("logout/");
      // 유저 정보는 response의 data임.
      userReset();
      // 기본 페이지로 이동함.
    } catch (err) {
      console.log("로그아웃 실패하였습니다.\n", err);
    }
  };

  // const isLogin = !!userState.user;
  return (
    <div>
      <S.HeaderWrapper>
        <S.HeaderLogo to="/" />
        <S.Navbar>
          <S.StyledLink to="/insights">Insights.</S.StyledLink>
          <S.StyledLink to="/share">Share.</S.StyledLink>
          <S.StyledLink to="/explore">Explore.</S.StyledLink>

          {user === null ? (
            <S.StyledLink to="/login">Login/Register.</S.StyledLink>
          ) : (
            <>
              <S.StyledLink to="/" onClick={handleLogout}>
                logout
              </S.StyledLink>
            </>
          )}
        </S.Navbar>
      </S.HeaderWrapper>
    </div>
  );
}

export default Header;
