/*검색창*/
import { useState, useEffect } from "react";
import styled from "styled-components";
import * as Api from "../../api/api";
import listsState from "../../atoms/search";
import pagingState from "../../atoms/paging";
import addressState from "../../atoms/address";
import typeState from "../../atoms/type";
import { useRecoilValue, useResetRecoilState, useRecoilState,useSetRecoilState} from "recoil";
import * as L from "./List.styled";
import axios from "axios";
import { FaSearch} from "react-icons/fa";
import { BsFilterCircle} from "react-icons/bs";
import {BsFillFilterCircleFill} from "react-icons/bs";
import SearchFilter from "../../components/filter/SearchFilter";


function ListSearch() {
  const [lists, setLists] = useRecoilState(listsState);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [currentPosts, setCurrentPosts] = useState([]);
  const paging=useRecoilValue(pagingState)
  const filterStyle:React.CSSProperties = {
    position: 'absolute',
    top:'0',
    right:'0'
    
  }
  const address=useRecoilState(addressState);
  const type=useRecoilState(typeState);

  useEffect(() => {
    const userData = async () => {
      console.log("address",address)
      // if (address === "전체" || search === "") {
      //   //검색어가 없을 경우 전체 리스트 반환
      //   await Api.get("board").then((res) => {
      //     setLists(res.data);
      //   });
      // } 
     
        await axios
        .get(`board?Page=${paging}`, {
          // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data.list)
          setLists(res.data.list);
          
          // setCurrentPosts(res.data.patientList.slice(indexOfFirstPost, indexOfLastPost))
        });
    };
    userData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paging]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // "registration" 엔드포인트로 post요청함.

      if (search === null || search === "") {
        //검색어가 없을 경우 전체 리스트 반환
        await Api.get("board").then((res) => {
          setLists(res.data.list);
          console.log("list",lists)
        });
      } else {

        await axios
        .get(`board?Title=${search}`, {
          // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("검색",res.data.list)
          setLists(res.data.list);
          
          // setCurrentPosts(res.data.patientList.slice(indexOfFirstPost, indexOfLastPost))
        });

        //검색 구현
        // const filterData = lists?.filter((row) => row['Title'].includes(search));
       
        // setLists(filterData);
        // console.log("fil",filterData)
      }

      // setPosting(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log("목록조회에 실패하였습니다.", err);
    }
    // setSearch("");
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("검색데이터",search)
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
    <L.SearchWrapper>
    <L.SearchForm onSubmit={handleSubmit}>
      <L.SearchInput
        type="text"
        placeholder="검색"
        autoFocus={true}
        value={search}
        onChange={onChangeSearch}
      />
      <L.SearchButton type='submit'><FaSearch color="white"/></L.SearchButton>
      
    </L.SearchForm>
    {!filter ? <BsFilterCircle size="50" style={filterStyle} onClick={()=>setFilter(!filter)}/>
    :<BsFillFilterCircleFill size="50" style={filterStyle} onClick={()=>setFilter(!filter)}/>

    }
    {filter &&    <SearchFilter/>

    }

    </L.SearchWrapper>
  );
}


export default ListSearch;
