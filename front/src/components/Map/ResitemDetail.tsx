import * as S from "../../pages/map/Map.styled";
import DetailMap from "./DetailMap";
import { useParams, Link } from "react-router-dom";

interface ItemProps {
  detail: any[];
}

function ResitemDetail({ detail }: ItemProps) {
  const { id } = useParams();
  const matched = detail.find((item) => item.index == id);
  return (
    <>
      <S.Title>
        <div>Explore the Vegan World.</div>
        <div>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.</div>
      </S.Title>

      <S.Layout>
        <S.resMenu>
          <S.searchContainer>
            <S.resContainer>
              <Link to="/explore">
                <img
                  src="../../../public/assets/image/back.png"
                  width="24"
                  height="24"
                  className="backIcon"
                />
              </Link>
              <S.restaurant>
                <S.h2>{`${matched.name}`}</S.h2>
                <S.p>주소 : {`${matched.location}`}</S.p>
                <S.p>전화번호 : {`${matched.number}`}</S.p>
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
