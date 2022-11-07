import styled from "styled-components";
import main1 from "../../assets/img/메인1.png";
import button1 from "../../assets/img/btn_동참하기.png";
import cardButton from "../../assets/img/바로가기Btn.png";
export interface MainStyledProps {
  height?: string;
  backgroundImg?: string;
  textAlign?: string;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
}

export const Main = styled.div`
  font-family: "Noto Sans KR";
`;

export const BackgroundImgLayout = styled.div<MainStyledProps>`
  width: auto;
  height: ${(props) => props.height};
  font-family: "Noto Sans KR";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleText = styled.div<MainStyledProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 1000;
  text-align: ${(props) => props.textAlign};
  margin-bottom: 30px;
  color: ${(props) => props.color};
`;

export const WithButton = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  border: none;
  background-color: transparent;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  float: right;
  margin-top: 15px;
  font-size: 20px;
  color: #f1f1f1;
  cursor: pointer;
  &:hover {
    background-color: #004d43;
    color: white;
    transition: 1s all;
  }
`;

export const PageLayout = styled.div<MainStyledProps>`
  width: auto;
  height: ${(props) => props.height};
  font-family: "Noto Sans KR";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

export const RowTextBox = styled.div`
  width: 1000px;
  height: 120px;
  text-align: left;
  margin: 5vh 0;
  color: #212121;
`;

export const MediumTitleText = styled.div<MainStyledProps>`
  font-size: 40px;
  font-weight: 1000;
  text-align: ${(props) => props.textAlign};
  margin-bottom: 30px;
  color: ${(props) => props.color};
`;

export const TextBox = styled.div`
  width: 600px;
  height: 120px;
  /* margin: 0 auto; */
`;
export const Text = styled.div<MainStyledProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin-bottom: 10px;
`;

export const ChartLayout = styled.div`
  display: flex;
  justify-content: center;
`;
export const ChartBox = styled.div`
  width: 550px;
  height: 350px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageBox = styled.div<MainStyledProps>`
  width: 400px;
  height: 270px;
  text-align: center;
  margin: 30px auto;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ChartText = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 30px auto 10px auto;
  color: #004d43;
`;

export const CardLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 25vh auto;
`;
export const Card = styled.div`
  width: 450px;
  height: 350px;
  margin: 0 30px;
`;

export const CardImgBox = styled.div<MainStyledProps>`
  width: 450px;
  height: 170px;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
`;

export const CardButton = styled.button<MainStyledProps>`
  width: 150px;
  height: 35px;
  border: none;
  display: block;
  background-image: url(${cardButton});
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  margin-top: 30px;
  background-color: transparent;
  cursor: pointer;
`;
