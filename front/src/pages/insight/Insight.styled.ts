import styled from "styled-components";

export interface InsightStyledProps {
  height?: string;
  backgroundImg?: string;
  fontSize?: number;
  textAlign?: string;
  color?: string;
  backgroundColor?: string;
  flexDirection?: string;
  fontWeight?: number;
  lineHeight?: string;
  width?: string;
}

export const Insight = styled.div`
  font-family: "Noto Sans KR";
`;

export const PageLayout = styled.div<InsightStyledProps>`
  width: 100%;
  height: ${(props) => props.height};
  font-family: "Noto Sans KR";
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.backgroundColor};
  position: relative;
`;

export const BackgroundImgLayout = styled.div<InsightStyledProps>`
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

export const TitleText = styled.div<InsightStyledProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 1000;
  text-align: ${(props) => props.textAlign};
  margin-bottom: 30px;
  color: ${(props) => props.color};
`;

export const RowTextBox = styled.div`
  width: 1000px;
  height: 120px;
  text-align: left;
  margin: 5vh auto 5vh auto;
  color: #212121;
`;

export const Text = styled.div<InsightStyledProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin-top: 10px;
`;

export const ChartLayout = styled.div`
  display: flex;
  justify-content: center;
`;
export const ChartBox = styled.div<InsightStyledProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 10px;
`;

export const ImageBox = styled.div<InsightStyledProps>`
  width: 280px;
  height: 220px;
  text-align: center;
  margin: 10px auto;
  background-image: url(${(props) => props.backgroundImg});
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HalfBox = styled.div<InsightStyledProps>`
  width: 50vw;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleEngText = styled.div<InsightStyledProps>`
  font-family: "PP Neue Montreal";
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin: 0 auto;
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
`;

export const AnimalButtonLayout = styled.div`
  display: flex;
  margin: 0 auto;
  /* justify-content: center;
  align-items: center; */
  margin: 30px auto;
`;
export const AnimalButton = styled.button<InsightStyledProps>`
  border: none;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 70px;
  background-color: transparent;
  cursor: pointer;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    width: 105px;
    height: 105px;
  }
`;

export const AnimalChartBox = styled.div`
  width: 450px;
  height: 450px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const AnimalChartImg = styled.div<InsightStyledProps>`
  width: 380px;
  height: 380px;
  text-align: center;
  background-image: url(${(props) => props.backgroundImg});
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ButtonBox = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  margin: 3vh auto 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 50px;
  height: 27px;
  font-family: "PP Neue Montreal";
  font-weight: 500;
  font-size: 16px;
  color: #212121;
  border: none;
  border-bottom: 1px solid #212121;
  margin: 0 20px 0 0;
  :hover {
    width: 53px;
    height: 30px;
    font-size: 17px;
    font-weight: 1000;
  }
  :active {
    border: none;
  }
`;

export const WithButton = styled.button`
  bottom: 50px;
  width: 130px;
  height: 40px;
  border: none;
  background-color: transparent;
  border: 1px solid #212121;
  border-radius: 50px;
  margin-top: 15px;
  font-size: 20px;
  color: #212121;
  text-align: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #004d43;
    color: white;
    transition: 1s all;
  }
`;
