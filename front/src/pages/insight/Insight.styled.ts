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
}

export const PageLayout = styled.div<InsightStyledProps>`
  width: auto;
  height: ${(props) => props.height};
  font-family: "Noto Sans KR";
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.backgroundColor};
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
  margin: 10vh auto 5vh auto;
  color: #212121;
`;

export const Text = styled.div<InsightStyledProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin-bottom: 8px;
`;

export const ChartLayout = styled.div`
  display: flex;
  justify-content: center;
`;
export const ChartBox = styled.div`
  width: 500px;
  height: 370px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 20px 10px;
`;

export const ImageBox = styled.div<InsightStyledProps>`
  width: 450px;
  height: 300px;
  text-align: center;
  margin: 20px auto 10px auto;
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

export const AnimalInputLayout = styled.div`
  display: flex;
  margin: 0 auto;
  /* justify-content: center;
  align-items: center; */
  margin: 45px auto;
`;
export const AnimalInputBox = styled.input<InsightStyledProps>`
  border: none;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 70px;
  background-color: transparent;
`;

export const AnimalChartBox = styled.div`
  width: 600px;
  height: 450px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const AnimalChartImg = styled.div<InsightStyledProps>`
  width: 380px;
  height: 380px;
  text-align: center;
  margin: 20px auto 10px auto;
  background-image: url(${(props) => props.backgroundImg});
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
`;
