import MainMap from "../../components/Map/MainMap";
import Resitem from "../../components/Map/Resitem";
import React, { useState, useEffect } from "react";
import Location from "../../datas/seoul.json";
import { Restaurant } from "../../types/restaurant";
import { useNavigate } from "react-router-dom";
import Paging from "../../components/Map/Paging";
import Page from "../../components/Map/Page";
import * as S from "./Map.styled";
import { DefaultValue } from "recoil";
// import { setServers } from "dns";;

const list = Location.data;
const initialRegionValues = [
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

const initialVeganValues = ["채식음식점", "채식가능음식점"];

function Map() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState(list); //리스트에 나타낼 전체 아이템

  //페이지네이션 관련
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(result);

  // const [lists, setLists] = useState(result); // 백엔드와 통신하여 모든 데이터를 setLists 에 저장해서 사용
  // const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
  // const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  // const [counts, setCounts] = useState(1); // 데이터의 총 개수를 setCounts 에 저장해서 사용
  // const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0

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

  // useEffect(() => {
  //   parks &&
  //     setParklist(
  //       parks.map((item, idx) => {
  //         let park_id = item.id;
  //         return (
  //           <ParkList key={park_id} item={item} idx={idx} park_id={park_id} />
  //         );
  //       })
  //     );
  // }, [parks]);

  useEffect(() => {
    // console.log("useEffect");
    // console.log("selectedRegion", selectedRegion);
    // console.log("selectedType", selectedType);
    // console.log("selectedVegan", selectedVegan);

    const filteredStores = list
      .filter((item) =>
        selectedRegion ? item.borough === selectedRegion : item
      )
      .filter((item) => (selectedType ? item.industry === selectedType : item))
      .filter((item) => (selectedVegan ? item.food === selectedVegan : item));

    setResult(filteredStores);
  }, [selectedType, selectedVegan, selectedRegion]);

  // 카테고리 함수
  function handleSelectRegion(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedRegion(innerText);
    setIsOpenRegionList(!isOpenRegionList);

    // const filteredStores = result.filter((item) => item.borough === innerText);
    // setResult(filteredStores);
  }

  function handleSelectType(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedType(innerText);
    setIsOpenTypeList(!isOpenTypeList);

    // const filteredStores = result.filter((item) => item.industry === innerText);
    // setResult(filteredStores);
  }

  function handleSelectVegan(e: React.MouseEvent<HTMLElement>) {
    const { innerText } = e.currentTarget;
    setSelectedVegan(innerText);
    setIsOpenVeganList(!isOpenVeganList);

    // const filteredStores = result.filter((item) => item.food === innerText);
    // setResult(filteredStores);
  }

  // 검색
  // 필터링까지는 됨 근데 왜 오류??? 다시 리셋됨 why???????

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
    console.log(searchedStores);
    setResult(searchedStores);
    navigate("/explore");
  }

  //페이지네이션
  useEffect(() => {
    setIndexOfLastPost(currentpage * 10);
    setIndexOfFirstPost(indexOfLastPost - 10);
    setCurrentPosts(result.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, result, 5]);

  return (
    <>
      <S.Title>
        <div>Explore the Vegan World.</div>
        <div>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.</div>
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
                <S.selectBox>
                  {/* 지역 */}
                  <S.select_button
                    type="button"
                    onClick={() => setIsOpenRegionList(!isOpenRegionList)}
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

                <S.selectBox>
                  {/* 종류 */}
                  <S.select_button
                    type="button"
                    onClick={() => setIsOpenTypeList(!isOpenTypeList)}
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

                <S.selectBox>
                  {/* 비건 */}
                  <S.select_button
                    type="button"
                    onClick={() => setIsOpenVeganList(!isOpenVeganList)}
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
              <S.pagination>
                <Paging
                  item={result}
                  page={currentpage}
                  setPage={setCurrentpage}
                />
              </S.pagination>
            </S.resContainer>
          </S.searchContainer>
        </S.resMenu>

        <MainMap items={result} />
      </S.Layout>
    </>
  );
}

export default Map;
