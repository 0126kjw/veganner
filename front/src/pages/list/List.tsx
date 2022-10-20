import React from "react";
import { useState, useEffect } from "react";
import * as Api from "../../api/api";
import styled from "styled-components";
import Search from "./Search";
import ListCard from "./ListCard";
import ListTab from "./ListTab";
import listsState from "../../atoms/search";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import * as L from "./List.styled";

function ViewList() {
  const navigate = useNavigate();
  const navigateToAddPost = () => {
    navigate("/addPost");
  };
  // const [lists,setLists] = useRecoilState(listsState);
  const lists = useRecoilValue(listsState);
  useEffect(() => {
    console.log("list", lists);
    // const lists=useRecoilValue(listsState)
  }, [lists]);

  return (
    <L.WholeLayout>
      <L.ListTitle>Share Your Experience</L.ListTitle>
      <L.ListTitle>여러분의 채식 경험을 자유롭게 공유해 보세요</L.ListTitle>
      <ListTab />
      <Search />
      <ListCard />

      {/* <div>
      {lists.map((list, index) => {
        console.log(list);
        return <div key={index}>{list["Title"]}</div>;
      })}
    </div> */}
      <L.WriteButton onClick={navigateToAddPost}>글쓰기</L.WriteButton>
    </L.WholeLayout>
  );
}
export default ViewList;
