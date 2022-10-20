import React from "react";
import * as S from "./Main.styled";
import foodEmission from "../../assets/data-analysis/foodEmission.png";
import foodEmissionToCar from "../../assets/data-analysis/foodEmissionToCar.png";
import left_img from "../../assets/img/left_img.png";
import right_img from "../../assets/img/right_img.png";

function Main() {
  return (
    <S.Main>
      <S.Main1Layout>
        <S.Main1Box>
          <S.Text1>나와 지구를 위한 채식 문화,</S.Text1>
          <S.Text1>비거너와 함께 시작해요!</S.Text1>
          <S.Button1 />
        </S.Main1Box>
      </S.Main1Layout>

      <S.PageLayout height={"100vh"}>
        <S.RowTextBox>
          <S.MediumTitleText color={"#212121"} textAlign={"left"}>
            “오늘도 고기 드셨나요?”
          </S.MediumTitleText>
          <S.Text fontSize={18} color={"#212121"} textAlign={"left"}>
            일주일에 하루만 고기를 먹지 않아도
          </S.Text>
          <S.Text fontSize={18} color={"#212121"} textAlign={"left"}>
            자동차가 1.6km를 달리면서 뿜어내는 것과 동일한 온실가스를 감축할 수
            있어요.
          </S.Text>
        </S.RowTextBox>
        <S.ChartLayout>
          <S.ChartBox>
            <S.ImageBox backgroundImg={foodEmission}></S.ImageBox>
            <S.ChartText>소고기, CO2e를 배출하는 음식 1위</S.ChartText>
          </S.ChartBox>
          <S.ChartBox>
            <S.ImageBox backgroundImg={foodEmissionToCar}></S.ImageBox>
            <S.ChartText>소고기 1kg,</S.ChartText>
            <S.ChartText>
              자동차가 약 1000km 주행했을 때와같은 CO2e 배출
            </S.ChartText>
          </S.ChartBox>
        </S.ChartLayout>
      </S.PageLayout>

      <S.PageLayout height={"350px"}>
        <S.TextBox>
          <S.MediumTitleText color={"#004d43"} textAlign={"center"}>
            “Begin a Vegan” with Vegganer.
          </S.MediumTitleText>
          <S.Text fontSize={18} color={"#212121"} textAlign={"center"}>
            비건 정보 공유부터 검색까지, 한번에!
          </S.Text>
        </S.TextBox>
      </S.PageLayout>

      <S.PageLayout height={"100vh"}>
        <S.CardLayout>
          <S.Card>
            <S.CardImgBox backgroundImg={left_img}></S.CardImgBox>
            <S.Text fontSize={24} color={"#004d43"} textAlign={"left"}>
              Share your experience.
            </S.Text>
            <br />
            <S.Text fontSize={18} color={"#212121"} textAlign={"left"}>
              비거너의 커뮤니티에서는
            </S.Text>
            <S.Text fontSize={18} color={"#212121"} textAlign={"left"}>
              비건 식당과 레시피를 자유롭게 공유할 수 있어요.
            </S.Text>
            <S.CardButton></S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImgBox backgroundImg={right_img}></S.CardImgBox>
            <S.Text fontSize={24} color={"#004d43"} textAlign={"left"}>
              Explore your world.
            </S.Text>
            <br />
            <S.Text fontSize={18} color={"#212121"} textAlign={"left"}>
              비거너에서는 지도에서 비건 식당을 쉽게 찾을 수 있어요.
            </S.Text>
            <S.CardButton></S.CardButton>
          </S.Card>
        </S.CardLayout>
      </S.PageLayout>
    </S.Main>
  );
}

export default Main;
