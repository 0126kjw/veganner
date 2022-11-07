import styled, { css } from "styled-components";

export interface FilterStyledProps {
  width: number;
  active?: boolean;
}

export const FilterLayout = styled.div`
  float: left;
  margin: 20px auto;
`;
export const FilterBox = styled.div`
  width: 1020px;
  height: 30px;
  display: flex;
  justify-content: center;
  line-height: 30px;
  font-size: 14px;
`;

export const FilterButton = styled.button<FilterStyledProps>`
  width: ${(props) => `${props.width}px`};
  height: 25px;
  border: none;
  border-radius: 25px;
  border: 1px solid #a9a9a9;
  text-align: center;
  color: #a9a9a9;
  margin: 0 2px 10px 2px;
  &:hover {
    border: 1px solid #212121;
    color: #212121;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #212121;
      color: #f1f1f1;
      border: none;
    `}
`;
