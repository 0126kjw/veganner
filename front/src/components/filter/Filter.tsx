import * as S from "././Filter.styled";
import { SetStateAction, Dispatch } from "react";

interface FilterProps {
  address: string;
  type: string;
  group: number;
  setAddress: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
}
function Filter(props: FilterProps) {
  const location = [
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
  const type = [
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
  const locationButtons = location.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          width={42}
          onClick={(e) => props.setAddress(v)}
          active={props.address === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          width={50}
          onClick={(e) => props.setAddress(v)}
          active={props.address === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });
  const typeButtons = type.map((v: string) => {
    if (v.length === 2) {
      return (
        <S.FilterButton
          width={42}
          onClick={(e) => props.setType(v)}
          active={props.type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else if (v.length === 3) {
      return (
        <S.FilterButton
          width={50}
          onClick={(e) => props.setType(v)}
          active={props.type === v}
        >
          {v}
        </S.FilterButton>
      );
    } else {
      return (
        <S.FilterButton
          width={64}
          onClick={(e) => props.setType(v)}
          active={props.type === v}
        >
          {v}
        </S.FilterButton>
      );
    }
  });

  let restaurant = false;
  let recipe = false;
  if (props.group === 0) {
    restaurant = true;
  } else if (props.group === 1) {
    recipe = true;
  }
  return (
    <>
      <S.FilterLayout>
        {restaurant && <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>}
        {(restaurant || recipe) && (
          <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
        )}
      </S.FilterLayout>
    </>
  );
}

export default Filter;
