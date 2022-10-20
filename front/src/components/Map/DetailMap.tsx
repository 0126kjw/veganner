import React, { useState } from "react";
import { Map, CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
import * as S from "./DetailMap.styled";

interface itemProps {
  item: Restaurant;
}

function DetailMap({ item }: itemProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <S.DetailMap>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: item.y,
          lng: item.x,
        }}
        style={{
          // 지도의 크기
          position: "relative",
          width: "100%",
          height: "90%",
        }}
        level={4} // 지도의 확대 레벨
      >
        {!isOpen && (
          <MapMarker
            onClick={() => setIsOpen(true)}
            position={{ lat: item.y, lng: item.x }}
            image={{
              src: "./assets/image/marker_icon-icons.com_54388.png",
              size: {
                width: 24,
                height: 35,
              },
            }}
            title={item.name}
          />
        )}
        {isOpen && (
          <CustomOverlayMap position={{ lat: item.y, lng: item.x }}>
            <S.wrap>
              <S.info>
                <S.title>{item.name}</S.title>
                <S.close
                  onClick={() => setIsOpen(false)}
                  title="닫기"
                ></S.close>
              </S.info>
              <S.body>
                <S.desc>
                  <S.ell>{item.location}</S.ell>
                </S.desc>
              </S.body>
            </S.wrap>
          </CustomOverlayMap>
        )}
      </Map>
    </S.DetailMap>
  );
}

export default DetailMap;
