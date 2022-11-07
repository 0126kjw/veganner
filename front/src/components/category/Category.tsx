import * as S from "././Category.styled";
import { SetStateAction, Dispatch } from "react";

interface CategoryProps {
  group: number;
  setGroup: Dispatch<SetStateAction<number>>;
}

const categories = [
  {
    id: "식당",
    value: 0,
  },
  {
    id: "레시피",
    value: 1,
  },
];
function Category(props: CategoryProps) {
  return (
    <>
      <S.CategoryButtonBox>
        <S.CategoryButton
          id="식당"
          onClick={(e) => props.setGroup(0)}
          active={props.group === 0}
        >
          식당
        </S.CategoryButton>
        <S.CategoryButton
          id="레시피"
          onClick={(e) => props.setGroup(1)}
          active={props.group === 1}
        >
          레시피
        </S.CategoryButton>
      </S.CategoryButtonBox>
    </>
  );
}

export default Category;
