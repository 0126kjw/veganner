import { useState, useEffect } from "react";
import Search from "./Search";
import ListCard from "./ListCard";
import ListTab from "./ListTab";
import { useNavigate } from "react-router-dom";
import * as L from "./List.styled";
import Pagination from "react-js-pagination";
import "./Pagination.css";
import axios from "axios";
import * as Api from "../../api/api";

function ViewList() {
  const navigate = useNavigate();
  const navigateToAddPost = () => {
    navigate("/addPost");
  };
  const email = window.sessionStorage.getItem("email");

  const [group, setGroup] = useState<number>(2);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [region, setRegion] = useState<string>("전체");
  const [type, setType] = useState<string>("전체");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [postList, setPostList] = useState([]);
  const [totalPage, setTotalPage] = useState(50);

  function handleNoSubmit() {
    if (window.confirm("로그인하고 글을 남겨주세요.")) {
      try {
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    const makeParam = () => {
      let params: any = {
        Page: currentPage,
      };
      if (type !== "전체") {
        params.Type = type;
      }
      if (region !== "전체") {
        params.Address = region;
      }
      if (group == 2) {
        setType("전체");
        setRegion("전체");
      }
      if (group !== 2) {
        params.Groups = group;
      }
      if (keyword !== "") {
        params.Title = keyword;
      }
      return params;
    };
    const getList = async () => {
      // await Api.get("board/", makeParam()).then((res) => {
      //       setPostList(res.data.list);
      //     });

      await axios
        .get("http://kdt-ai5-team01.elicecoding.com:5000/board", {
          headers: {
            "Content-Type": "application/json",
          },
          params: makeParam(),
        })
        .then((res) => {
          setPostList(res.data.list);
          setTotalPage(res.data.page["num_pages"]);
        });
    };
    getList();
  }, [currentPage, group, keyword, region, type]);

  return (
    <>
      <L.WholeLayout>
        <L.ListTitle>Share Your Experience.</L.ListTitle>
        <L.ListText>여러분의 채식 경험을 자유롭게 공유해 보세요</L.ListText>
        <ListTab group={group} setGroup={setGroup} />
        <Search
          setKeyword={setKeyword}
          setRegion={setRegion}
          setType={setType}
          region={region}
          type={type}
          group={group}
        />
        {postList.length !== 0 && <ListCard postList={postList} />}
        {email === null ? (
          <L.WriteButton onClick={handleNoSubmit}>글 작성하기</L.WriteButton>
        ) : (
          <L.WriteButton onClick={navigateToAddPost}>글 작성하기</L.WriteButton>
        )}
      </L.WholeLayout>
      <div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={12}
          totalItemsCount={totalPage * 12}
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
