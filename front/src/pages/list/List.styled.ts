import styled, { css } from "styled-components";
import profile from "../../assets/img/profile.png";

export interface listStyledProps {
  backgroundImage?: string;
}

export interface ListStyledProps {
  backgroundImage?: string;
  backgroundColor?: string;
}

export const WholeLayout = styled.div`
  width: 1204px;
  margin: 0 auto;
  position: relative;
  font-family: Noto Sans KR;
`;

export const ListTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 34px;
  text-align: center;
  letter-spacing: -1.2px;
  color: #004d43;
  margin-top: 3%;
`;

export const ListText = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -1.2px;
  color: #212121;
  margin-top: 1.5%;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 700px;
  margin: 0 auto;
`;

export const SearchBox = styled.div`
  text-align: center;
  position: relative;
  width: 550px;
  margin: 0 auto;
  margin-bottom: 8%;
`;

export const SearchInput = styled.input`
  width: 550px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding-left: 6%;
  font-size: 16px;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background: #212121;
  border-radius: 50%;
  top: 0%;
  right: 1px;
  cursor: pointer;
`;

export const CardLayout = styled.div`
  width: 1220px;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 23%;
  height: 380px;
  margin: 0 auto;
  border: 0.5px solid rgba(33, 33, 33, 0.3);
  display: inline-block;
  margin-right: 2%;
  margin-top: 2%;
  cursor: pointer;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const CardHeader = styled.div`
  font-size: 12px;
  height: 54px;
  line-height: 30px;
  position: relative;
`;

export const CardWrap = styled.div`
  width: 100%;
  padding: 4% 4%;
  box-sizing: border-box;
`;

export const CardHeaderProfile = styled.span`
  width: 30.37px;
  height: 30px;
  background: #a5a5a5;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3%;
  background-image: url(${profile});
  background-size: cover;
`;

export const CardHeaderText = styled.span`
  font-size: 12px;
  vertical-align: middle;
`;

export const CardHeaderImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 5%;
`;

export const imgWrapper = styled.div<listStyledProps>`
  width: 88%;
  height: 250px;
  margin: 0 auto;
  padding-top: 10px;
  border-top: 0.5px solid rgba(33, 33, 33, 0.3);
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
`;

export const CardBottom = styled.div`
  width: 88%;
  margin: 0 auto;
  margin-top: 3%;
`;

export const CardBottomTitle = styled.div`
  font-size: 14px;
  margin-top: 5%;
`;

export const CardBottomDate = styled.div`
  font-size: 12px;
  color: #8f8f8f;
  margin-top: 2%;
`;
export const TabSection = styled.section`
  width: 30%;
  margin: 0 auto;
  margin-top: 4%;
  margin-bottom: 3%;
`;

export const TabListGroup = styled.ul`
  display: flex;

  justify-content: space-evenly;
`;

export const TabList = styled.li<{ active?: boolean }>`
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 1px solid;
      padding-bottom: 4px;
      font-weight: 900;
    `}
`;

export const WriteButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;

  // position: absolute;
  // right: 0;
  width: 120px;
  height: 40px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  line-height: 30px;
  background: #004d43;

  border-radius: 30px;
  border: none;

  margin-top: 2%;
  cursor: pointer;
  color: #f1f1f1;
`;

export const likeWrap = styled.div`
  position: absolute;
  right: 6%;
  top: 14px;
`;

export const searchWrap = styled.div`
  text-align: center;
`;

export const FilterButton = styled.button<ListStyledProps>`
  width: 50px;
  height: 50px;
  border: none;
  border: 1px solid #212121;
  border-radius: 50px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  :active {
    border: none;
  }
  position: absolute;
  top: 0;
  right: 0;
`;
