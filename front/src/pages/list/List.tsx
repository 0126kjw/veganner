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
import Pagination from "react-js-pagination";
import './Pagination.css';
import pagingState from "../../atoms/paging";



function ViewList() {
  const navigate = useNavigate();
  const navigateToAddPost = () => {
    navigate("/addPost");
  };
  // const [lists,setLists] = useRecoilState(listsState);
  const lists = useRecoilValue(listsState);
  const [page, setPage] = useRecoilState(pagingState);
  const handlePageChange = (page: number) => {
    console.log("page",page);
    setPage(page);
    
  };

  /*pagination*/

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    console.log("list", lists);
    // const lists=useRecoilValue(listsState)
  }, [lists]);

  return (
    <>
      <L.WholeLayout>
        <L.ListTitle>Share Your Experience</L.ListTitle>
        <L.ListText>여러분의 채식 경험을 자유롭게 공유해 보세요</L.ListText>
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
      <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={50}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={handlePageChange}
      />
      </div>
    </>
  );
}
export default ViewList;
