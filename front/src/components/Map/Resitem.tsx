import { Restaurant } from "../../types/restaurant";
import * as S from "../../pages/map/Map.styled";

interface ItemProps {
  item: Restaurant;
}

function Resitem({ item }: ItemProps) {
  return (
    <>
      <S.restaurant>
        <S.stylelink to={`./detail/${item.index}`} text-decoration="none">
          <S.h2>{item.name}</S.h2>
          <S.p>{item.location}</S.p>
        </S.stylelink>
        <S.boxdiv>
          <S.box>{item.industry}</S.box>
          <S.box>{item.food}</S.box>
        </S.boxdiv>
      </S.restaurant>
    </>
  );
}

export default Resitem;
