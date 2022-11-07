import { Dispatch, SetStateAction } from "react";
import * as S from "./SearchFilter.styled";

const locations = [
  "전체",
  "서울",
  "경기",
  "강원",
  "인천",
  "세종",
  "충북",
  "충남",
  "대전",
  "광주",
  "전남",
  "경북",
  "대구",
  "경남",
  "울산",
  "부산",
  "제주도",
];
const types = [
  "전체",
  "한식",
  "일식",
  "양식",
  "카페",
  "분식",
  "동남아",
  "술집",
  "베이커리",
  "인도/중동",
  "중국식",
];

interface Props {
  setRegion: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
  region: string;
  type: string;
  group: number;
}

function SearchFilter({ setRegion, setType, region, type, group }: Props) {
  const locationButtons = locations.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          width={50}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setRegion(v);
          }}
          active={region === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          width={60}
          onClick={(e) => {
            e.preventDefault();
            setRegion(v);
          }}
          active={region === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 4) {
      return (
        <S.FilterButton
          width={80}
          onClick={(e) => {
            e.preventDefault();
            setRegion(v);
          }}
          active={region === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });
  const typeButtons = types.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          width={50}
          onClick={(e) => {
            e.preventDefault();
            setType(v);
          }}
          active={type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          width={60}
          onClick={(e) => {
            e.preventDefault();
            setType(v);
          }}
          active={type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else {
      return (
        <S.FilterButton
          width={80}
          onClick={(e) => {
            e.preventDefault();
            setType(v);
          }}
          active={type === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });

  return (
    <S.FilterLayout>
      {group === 0 && <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>}
      {(group === 0 || group === 1) && (
        <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
      )}
    </S.FilterLayout>
  );
}

export default SearchFilter;
