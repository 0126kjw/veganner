import * as S from "./Insight.styled";
import foodVegan from "../../assets/img/foodvegan.jpeg";
import totalCO2eEmission from "../../assets/data-analysis/TotalCO2eEmission.png";
import KoreaCO2eEmission from "../../assets/data-analysis/KoreaCO2eEmission.png";
import foodEmission from "../../assets/data-analysis/foodEmission.png";
import foodImpact from "../../assets/data-analysis/foodImpact.png";
import foodEmissionToCar from "../../assets/data-analysis/foodEmissionToCar.png";
import cow from "../../assets/img/animal/cow.png";
import lamb from "../../assets/img/animal/lamb.png";
import pig from "../../assets/img/animal/pig.png";
import chicken from "../../assets/img/animal/chicken.png";
import liveStockEmission from "../../assets/data-analysis/LivestockEmssion/liveStockEmission.png";
import CowEmission from "../../assets/data-analysis/LivestockEmssion/CowEmission.png";

function Insight() {
  return (
    <>
      <S.BackgroundImgLayout height={"100vh"} backgroundImg={foodVegan}>
        <S.TitleText fontSize={55} textAlign="center" color="#f1f1f1">
          비거너는 환경을 위한
        </S.TitleText>
        <S.TitleText fontSize={55} textAlign="center" color="#f1f1f1">
          채식 문화를 만듭니다.
        </S.TitleText>
      </S.BackgroundImgLayout>

      <S.PageLayout height={"100vh"} flexDirection={"column"}>
        <S.RowTextBox>
          <S.TitleText fontSize={40} textAlign="left" color="#212121">
            계속해서 증가하는 온실가스 배출량
          </S.TitleText>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            전 세계 온실가스 배출 총량은 지속적으로 증가하고 있습니다.
          </S.Text>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            폭염, 폭우, 홍수 등의 기후 재앙이 갈수록 심각해지고 있는 상황에서,
          </S.Text>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            지구온난화를 막을 수 있는 유일한 방법은 온실가스 배출량을 줄이는
            것입니다.
          </S.Text>
        </S.RowTextBox>
        <S.ChartLayout>
          <S.ChartBox>
            <S.ImageBox backgroundImg={totalCO2eEmission} />
            <S.Text fontSize={14}>
              1990년 - 2019년 대륙별 온실가스 배출량 변화
            </S.Text>
          </S.ChartBox>
          <S.ChartBox>
            <S.ImageBox backgroundImg={KoreaCO2eEmission} />
            <S.Text fontSize={14}>
              1990년 - 2020년 우리나라의 온실가스 배출량 변화
            </S.Text>
          </S.ChartBox>
        </S.ChartLayout>
      </S.PageLayout>

      <S.PageLayout height={"100vh"} flexDirection={"column"}>
        <S.RowTextBox>
          <S.TitleText fontSize={40} textAlign={"left"} color={"#212121"}>
            식품 생산 과정에서 배출되는 CO2e 1위 "육류"
          </S.TitleText>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            전세계 온실가스 배출량의 4분의 1은 식품입니다.
          </S.Text>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            식품 품목 중 온실가스를 가장 많이 배출하는 것은 육류입니다.
          </S.Text>
          <S.Text fontSize={14} color={"#004D43"} textAlign={"left"}>
            *CO2e(이산화탄소환산톤): 온실가스를 이산화탄소 배출량으로 환산한 값.
          </S.Text>
        </S.RowTextBox>
        <S.ChartLayout>
          <S.ChartBox>
            <S.ImageBox backgroundImg={foodEmission} />
            <S.Text fontSize={14}>
              소고기는 채소보다 100배 많은 CO2e를 배출합니다.
            </S.Text>
          </S.ChartBox>
          <S.ChartBox>
            <S.ImageBox backgroundImg={foodImpact} />
            <S.Text fontSize={14}>
              전 세계 온실가스 배출량의 4분의 1은 식품이며,
            </S.Text>
            <S.Text fontSize={14}>
              그중 소고기와 양고기가 절반 이상을 차지합니다.
            </S.Text>
          </S.ChartBox>
        </S.ChartLayout>
      </S.PageLayout>

      <S.PageLayout height={"70vh"} flexDirection={"row"}>
        <S.HalfBox height={"70vh"} backgroundColor={"#ffffff"}>
          <S.ImageBox backgroundImg={foodEmissionToCar} />
        </S.HalfBox>
        <S.HalfBox height={"70vh"} backgroundColor={"#004D43"}>
          <S.RowTextBox>
            <S.TitleText fontSize={32} color="#f1f1f1" textAlign="center">
              CO2 배출량, 고기 1kg = 자동차 1000km
            </S.TitleText>
            <S.Text fontSize={14} color="#f1f1f1" textAlign="center">
              현대 그랜저 하이브리드 모델을 기준으로 식품 생산과정에서 CO2
              배출량을 환산한 결과,
            </S.Text>
            <S.Text fontSize={14} color="#f1f1f1" textAlign="center">
              소고기 1kg을 만드는 과정에서 배출되는 CO2e는 자동차가 약 1000km를
              주행할때와 같았습니다.
            </S.Text>
          </S.RowTextBox>
        </S.HalfBox>
      </S.PageLayout>

      <S.PageLayout height="30vh" backgroundColor="#CDEA67">
        <S.TitleEngText
          fontSize={100}
          textAlign="center"
          fontWeight={1000}
          lineHeight={"30vh"}
        >
          CLICK ME !
        </S.TitleEngText>
      </S.PageLayout>

      <S.PageLayout
        height="100vh"
        backgroundColor="#CDEA67"
        flexDirection="column"
      >
        <S.AnimalInputLayout>
          <S.AnimalInputBox backgroundImg={cow} />
          <S.AnimalInputBox backgroundImg={lamb} />
          <S.AnimalInputBox backgroundImg={pig} />
          <S.AnimalInputBox backgroundImg={chicken} />
        </S.AnimalInputLayout>
        <S.ChartLayout>
          <S.AnimalChartBox>
            <S.AnimalChartImg backgroundImg={liveStockEmission} />
            <S.Text fontSize={14}>
              CH4 : 46672.79(Mt), CO2 : 29566.26(Mt), N2O : 23162.41(Mt)
            </S.Text>
          </S.AnimalChartBox>
        </S.ChartLayout>
      </S.PageLayout>
    </>
  );
}
export default Insight;
