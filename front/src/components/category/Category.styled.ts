import styled, { css } from "styled-components";

export const CategoryButtonBox = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  margin: 20px auto;
`;
export const CategoryButton = styled.button<{ active?: boolean }>`
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 15px;
  background-color: #d9d9d9;
  color: #004d43;
  text-align: center;
  line-height: 30px;
  /* margin: 0 10px; */
  margin: 0 auto;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: #004d43;
    color: #f1f1f1;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #004d43;
      color: #f1f1f1;
    `}
`;
