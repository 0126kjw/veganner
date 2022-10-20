import { Map } from "react-kakao-maps-sdk";
import Marker from "./Marker";
import * as S from "../../pages/map/Map.styled";
import { findByLabelText } from "@testing-library/react";

interface MainMapprops {
  items: Array<any>;
}
function MainMap({ items }: MainMapprops) {
  // type image={
  //   src: string,
  //   title: string
  // }

  return (
    <S.MainMap>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.5642135,
          lng: 127.0016985,
        }}
        style={{
          // 지도의 크기
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        level={9} // 지도의 확대 레벨
      >
        {/* Marker 컴포넌트로 카테고리 한 식당만 마커표시 */}
        {items.map((item) => (
          <Marker key={item.index} location={item} />
        ))}
      </Map>
    </S.MainMap>
  );
}

export default MainMap;
