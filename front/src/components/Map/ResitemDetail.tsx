import * as S from "../../pages/map/Map.styled";
import DetailMap from "./DetailMap";
import { useParams, Link } from "react-router-dom";
import back from "../../assets/img/back.png";

interface ItemProps {
  detail: any[];
}

function ResitemDetail({ detail }: ItemProps) {
  const { id } = useParams();
  const matched = detail.find((item) => item.index == id);
  return (
    <>
      <S.Title>
        <S.Title1>Explore the Vegan World.</S.Title1>
        <S.Title2>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.</S.Title2>
      </S.Title>

      <S.Layout>
        <S.resMenu>
          <S.searchContainer>
            <S.icon>
              <Link to="/explore">
                <S.backicon
                  src={back}
                  width="24"
                  height="24"
                  className="backIcon"
                />
              </Link>
            </S.icon>
            <S.resContainer>
              <S.restaurant>
                <S.h2>{`${matched.name}`}</S.h2>
                <S.p>주소 : {`${matched.location}`}</S.p>
                <S.p>전화번호 : {`${matched.number}`}</S.p>
                <S.boxdiv>
                  <S.box>{matched.industry}</S.box>
                  <S.box>{matched.food}</S.box>
                </S.boxdiv>
              </S.restaurant>
            </S.resContainer>
          </S.searchContainer>
        </S.resMenu>
        <DetailMap item={matched} />
      </S.Layout>
    </>
  );
}

export default ResitemDetail;
