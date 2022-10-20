/*검색창*/
import { useState, useEffect } from "react";
import styled from "styled-components";
import * as Api from "../../api/api";
import listsState from "../../atoms/search";
import { useRecoilValue, useResetRecoilState, useRecoilState,useSetRecoilState} from "recoil";
import * as L from "./List.styled";

function ListSearch() {
  const [lists, setLists] = useRecoilState(listsState);
  const [search, setSearch] = useState("");
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const userData = async () => {
      await Api.get("board").then((res) => {
        setLists(res.data);
        // setCurrentPosts(res.data.patientList.slice(indexOfFirstPost, indexOfLastPost))
      });
    };
    userData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // "registration" 엔드포인트로 post요청함.

      if (search === null || search === "") {
        //검색어가 없을 경우 전체 리스트 반환
        await Api.get("board").then((res) => {
          setLists(res.data);
        });
      } else {
        //검색 구현
        const filterData = lists.filter((row) => row['Title'].includes(search));
        console.log(filterData)
        setLists(filterData);
        console.log("fil",filterData)
      }

      // setPosting(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log("목록조회에 실패하였습니다.", err);
    }
    setSearch("");
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //     onChange(e.target.value);
  //   };

  //   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     // 검색 창에 입력된 글자를 받아오는 함수
  //     setSearch(e.target.value);
  //   };

  return (
    <>
    <L.SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색"
        autoFocus={true}
        value={search}
        onChange={onChangeSearch}
      />
      <button type='submit'>검색</button>
    </L.SearchForm>
    </>
  );
}

export default ListSearch;
