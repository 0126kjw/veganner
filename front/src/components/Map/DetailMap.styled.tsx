import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

export const DetailMap = styled.div`
  position: flex;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const wrap = styled.div`
  display: block;
  height: 120px;
  width: 210px;
  background-color: white;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.4);
`;

export const info = styled.div`
  display: block;
  height: 25px;
  // float: right;
  background-color: #e2e2e2;
`;

export const close = styled(IoCloseSharp)`
  float: right;
  // text-align: right;
`;

export const body = styled.div`
  flex-direction: column;
`;

export const desc = styled.div`
  display: block;
`;

export const title = styled.h2`
  display: block;
  width: 250px;
  font-size: 14px;
  // flex-direction: column;
  margin: 13px 0 0 15px;
  // text-align: center;
`;
export const ell = styled.p`
  display: block;
  margin: 10px 15px 15px 15px;
  word-break: keep-all;
  font-size: 9px;
  white-space: normal;
  line-height: 1.5;
`;

export const road = styled.img`
  width: 50px;
  height: 50px;
`;
