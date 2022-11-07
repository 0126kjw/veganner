import React from "react";
import * as S from "./Main.styled";
import left_img from "../../assets/img/left_img.png";
import right_img from "../../assets/img/right_img.png";
import veganism_background from "../../assets/img/veganism_background.jpeg";
import { useNavigate } from "react-router-dom";
import FoodEmissionBar from "../../components/chart/foodEmission/FoodEmissionBar";
import FoodEmissionToCarBar from "../../components/chart/foodEmission/FoodEmissionToCarBar";

function Main() {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.BackgroundImgLayout
        backgroundImg={veganism_background}
        height={"100vh"}
      >
        <S.TitleText fontSize={60} textAlign={"right"} color={"#f1f1f1"}>
          나와 지구를 위한 채식 문화,
        </S.TitleText>
        <S.TitleText fontSize={60} textAlign={"right"} color={"#f1f1f1"}>
          비거너와 함께 시작해요
        </S.TitleText>
        <S.WithButton
          onClick={(e) => {
            navigate("/insight");
          }}
        >
          동참하기
        </S.WithButton>
      </S.BackgroundImgLayout>

      {/* <S.MainBackgroundImgLayout>
          <S.TitleText>나와 지구를 위한 채식 문화,</S.TitleText>
          <S.TitleText>비거너와 함께 시작해요</S.TitleText>
          <S.WithButton />
        </S.MainBackgroundImgLayout> */}

      <S.PageLayout height={"100vh"}>
        <S.RowTextBox>
          <S.MediumTitleText color={"#212121"} textAlign={"left"}>
            “오늘도 고기 드셨나요?”
          </S.MediumTitleText>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            고기는 야채보다 100배 더 많은 온실가스를 배출하고 있어요.
          </S.Text>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            심지어 국내 자동차 중 연비가 상대적으로 좋은 현대 그랜저 하이브리드
            모델을 기준으로 비교해봐도,
          </S.Text>
          <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
            고작 소고기 1kg를 생산할 때 배출되는 온실 가스량이 해당 자동차가 약
            1000km 달렸을 때와 같았어요.
          </S.Text>
        </S.RowTextBox>
        <S.ChartLayout>
          <S.ChartBox>
            <FoodEmissionBar />
            <S.ChartText>소고기, CO2e를 배출하는 음식 1위</S.ChartText>
          </S.ChartBox>
          <S.ChartBox>
            <FoodEmissionToCarBar />
            <S.ChartText>
              소고기 1kg, 자동차가 약 1000km 주행했을 때와같은 CO2e 배출
            </S.ChartText>
          </S.ChartBox>
        </S.ChartLayout>
      </S.PageLayout>

      <S.PageLayout height={"35vh"}>
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
            <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
              비거너의 커뮤니티에서는
            </S.Text>
            <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
              비건 식당과 레시피를 자유롭게 공유할 수 있어요.
            </S.Text>
            <S.CardButton
              onClick={(e) => {
                navigate("/board");
              }}
            ></S.CardButton>
          </S.Card>
          <S.Card>
            <S.CardImgBox backgroundImg={right_img}></S.CardImgBox>
            <S.Text fontSize={24} color={"#004d43"} textAlign={"left"}>
              Explore your world.
            </S.Text>
            <br />
            <S.Text fontSize={16} color={"#212121"} textAlign={"left"}>
              비거너에서는 지도에서 비건 식당을 쉽게 찾을 수 있어요.
            </S.Text>
            <S.Text fontSize={14} color={"#828282"} textAlign={"left"}>
              *현재는 서울시 비건 식당 정보만 제공 중 (나머지 지역 추후 업데이트
              예정)
            </S.Text>
            <S.CardButton
              onClick={(e) => {
                navigate("/explore");
              }}
            ></S.CardButton>
          </S.Card>
        </S.CardLayout>
      </S.PageLayout>
    </S.Main>
  );
}

export default Main;
