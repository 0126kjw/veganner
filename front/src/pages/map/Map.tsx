import MainMap from "../../components/Map/MainMap";
import Resitem from "../../components/Map/Resitem";
import React, { useState, useEffect } from "react";
import Location from "../../../src/assets/data-analysis/json/seoul.json";
import { Restaurant } from "../../types/restaurant";
import { useNavigate } from "react-router-dom";
import Paging from "../../components/Map/Paging";
import * as S from "./Map.styled";
import { DefaultValue } from "recoil";

const list = Location.data;
const initialRegionValues = [
  "전체",
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const initialTypeValues = [
  "전체",
  "동남아",
  "분식",
  "베이커리",
  "술집",
  "양식",
  "인도/중국",
  "중국식",
  "카페",
  "한식",
];

const initialVeganValues = ["전체", "채식 전문", "채식 가능"];

function Map() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState(list); //리스트에 나타낼 전체 아이템

  //페이지네이션 관련
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(result);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //카테고리 지역관련
  const [regions, setRegions] = useState<string[]>(initialRegionValues);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isOpenRegionList, setIsOpenRegionList] = useState<boolean>(false);

  // 카테고리 종류관련
  const [types, setTypes] = useState<string[]>(initialTypeValues);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isOpenTypeList, setIsOpenTypeList] = useState<boolean>(false);

  //카테고리 비건관련
  const [vegans, setVegans] = useState<string[]>(initialVeganValues);
  const [selectedVegan, setSelectedVegan] = useState<string | null>(null);
  const [isOpenVeganList, setIsOpenVeganList] = useState<boolean>(false);

  useEffect(() => {
    const filteredStores = list
      .filter((item) => {
        if (selectedRegion === "전체" || selectedRegion === null) {
          return item;
        } else {
          return item.borough === selectedRegion;
        }
      })
      .filter((item) => {
        if (selectedType === "전체" || selectedType === null) {
          return item;
        } else {
          return item.industry === selectedType;
        }
      })
      .filter((item) => {
        if (selectedVegan === "전체" || selectedVegan === null) {
          return item;
        } else {
          return item.food === selectedVegan;
        }
      });
    setResult(filteredStores);
  }, [selectedType, selectedVegan, selectedRegion]);

  // 카테고리 함수
  function handleSelectRegion(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedRegion(innerText);
    setIsOpenRegionList(!isOpenRegionList);
  }

  function handleSelectType(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedType(innerText);
    setIsOpenTypeList(!isOpenTypeList);
  }

  function handleSelectVegan(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedVegan(innerText);
    setIsOpenVeganList(!isOpenVeganList);
  }

  // 검색
  function handleSearch(e: any) {
    e.preventDefault();
    const searchedStores = list.filter((item) =>
      searchValue
        ? item.location.includes(searchValue) ||
          // item.industry.includes(searchValue) ||
          // item.food.includes(searchValue) ||
          item.name.includes(searchValue) ||
          item.number === searchValue
        : item
    );
    setResult(searchedStores);
    navigate("/explore");
  }

  useEffect(() => {
    setIndexOfLastPost(currentpage * 10);
    setIndexOfFirstPost(indexOfLastPost - 10);
    setCurrentPosts(result.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, result, 5]);

  return (
    <>
      <S.Title>
        <S.Title1>Explore the Vegan World.</S.Title1>
        <S.Title2>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요</S.Title2>
      </S.Title>
      <S.Layout>
        <S.resMenu>
          <S.searchContainer>
            <S.searchForm onSubmit={handleSearch}>
              <S.search
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />

              <S.selectContainer>
                <S.selectBox active={isOpenRegionList}>
                  {/* 지역 */}
                  <S.select_button
                    type="button"
                    onClick={() => setIsOpenRegionList(!isOpenRegionList)}
                    active={isOpenRegionList}
                  >
                    {selectedRegion ?? "지역별"}
                  </S.select_button>

                  {isOpenRegionList && (
                    <S.optionList>
                      {regions.map((region) => (
                        <S.optionitem key={region} onClick={handleSelectRegion}>
                          {region}
                        </S.optionitem>
                      ))}
                    </S.optionList>
                  )}
                </S.selectBox>

                <S.selectBox active={isOpenTypeList}>
                  {/* 종류 */}
                  <S.select_button
                    type="button"
                    onClick={() => setIsOpenTypeList(!isOpenTypeList)}
                    active={isOpenTypeList}
                  >
                    {selectedType ?? "종류별"}
                  </S.select_button>

                  {isOpenTypeList && (
                    <S.optionList>
                      {types.map((type) => (
                        <S.optionitem key={type} onClick={handleSelectType}>
                          {type}
                        </S.optionitem>
                      ))}
                    </S.optionList>
                  )}
                </S.selectBox>

                <S.selectBox active={isOpenVeganList}>
                  {/* 비건 */}
                  <S.select_button
                    type="button"
                    onClick={() => setIsOpenVeganList(!isOpenVeganList)}
                    active={isOpenVeganList}
                  >
                    {selectedVegan ?? "비건"}
                  </S.select_button>

                  {isOpenVeganList && (
                    <S.optionList>
                      {vegans.map((vegan) => (
                        <S.optionitem key={vegan} onClick={handleSelectVegan}>
                          {vegan}
                        </S.optionitem>
                      ))}
                    </S.optionList>
                  )}
                </S.selectBox>
              </S.selectContainer>
            </S.searchForm>

            <S.resContainer>
              {currentPosts.map((item) => (
                <Resitem key={item.index} item={item as Restaurant} />
              ))}
            </S.resContainer>
            <S.pagination>
              <Paging
                item={result}
                page={currentpage}
                setPage={setCurrentpage}
              />
            </S.pagination>
          </S.searchContainer>
        </S.resMenu>

        <MainMap items={result} />
      </S.Layout>
    </>
  );
}

export default Map;
