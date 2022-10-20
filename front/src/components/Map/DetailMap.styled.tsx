import styled from "styled-components";

export const DetailMap = styled.div`
  position: flex;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const wrap = styled.div`
  display: block;
  height: 150px;
  width: 300px;
  border-radius: 10px;
  background-color: white;
`;

export const info = styled.div`
  display: flex;
  height: 50px;
  background-color: #e2e2e2;
  border-radius: 10px;
`;
export const title = styled.div`
  width: 250px;
  font-size: 20px;
  flex-direction: row;
  margin: 15px;
  text-align: center;
`;

export const close = styled.img`
  flex-direction: row;
  width: 50px;
`;

export const body = styled.div`
  flex-direction: column;
`;

export const desc = styled.div`
  display: flex;
`;

export const ell = styled.div`
  display: flex;
  margin: 15px;
  word-break: keep-all;
  white-space: normal;
  line-height: 1.5;
`;

export const road = styled.img`
  width: 50px;
  height: 50px;
`;
