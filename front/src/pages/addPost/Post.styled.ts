import styled from "styled-components";

export const PostLayout = styled.div`
  width: 1020px;
  margin: 0 auto;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #212121;
  background-color: #f1f1f1;
  font-size: 24px;
  text-align: center;
  display: block;
  margin: 0 auto 20px auto;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const LocationRegisterBar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 25px;
  border: none;
  border: 0.5px solid #212121;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  text-align: left;
  padding-left: 20px;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ThumbnailInput = styled.input`
  width: 300px;
  height: 50px;
  line-height: 50px;
  float: right;
`;

export const ButtonBox = styled.div`
  display: flex;
  float: right;
  width: 150px;
  height: 30px;
  margin: 30px 0 50px 0;
`;
export const Button = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 15px;
  color: #f1f1f1;
  background-color: #d9d9d9;
  color: #004d43;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
  font-size: 14px;
  font-weight: 700;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-color: #004d43;
    color: #d9d9d9;
  }
`;
