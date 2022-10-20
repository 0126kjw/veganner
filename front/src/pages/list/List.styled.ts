import styled, { css } from "styled-components";

export const WholeLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ListTitle = styled.div`
  text-align: center;
`;

export const SearchForm = styled.form`
  text-align: center;
`;

export const CardLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 22%;
  height: 380px;
  margin: 0 auto;
  border: 0.5px solid rgba(33, 33, 33, 0.3);
  display: inline-block;
  margin-right: 2%;
`;

export const CardHeader = styled.div`
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  border-bottom: 0.5px solid rgba(33, 33, 33, 0.3);
`;

export const CardHeaderProfile = styled.span`
  width: 30.37px;
  height: 30px;
  background: #a5a5a5;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3%;
`;

export const CardHeaderText = styled.span`
  font-size: 12px;
  vertical-align: middle;
`;

export const CardHeaderImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardBottom = styled.div``;

export const CardBottomTitle = styled.div`
  font-size: 14px;
`;

export const CardBottomDate = styled.div`
  font-size: 12px;
  color: #8f8f8f;
`;

export const TabListGroup = styled.ul`
  display: flex;
  justify-content: center;
`;

export const TabList = styled.li<{ active?: boolean }>`
  font-size: 12px;
  color: #8f8f8f;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 1px solid;
    `}
`;

export const WriteButton = styled.button`
  float: right;
`;
