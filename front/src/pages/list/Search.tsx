/*검색창*/
import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ChangeEvent,
} from "react";

import * as Api from "../../api/api";
import pagingState from "../../atoms/paging";
import addressState from "../../atoms/address";
import typeState from "../../atoms/type";
import * as L from "./List.styled";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { BsFilterCircle } from "react-icons/bs";
import { BsFillFilterCircleFill } from "react-icons/bs";
import SearchFilter from "../../components/filter/SearchFilter";

interface Props {
  setKeyword: Dispatch<SetStateAction<string>>;
  region: string;
  type: string;
  setRegion: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
  group: number;
}
function ListSearch({ setKeyword, ...props }: Props) {
  const [inputState, setInputState] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const filterStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    right: "0",
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputState(value);
  };

  return (
    <L.SearchWrapper>
      <L.SearchBox>
        <L.SearchInput
          type="text"
          placeholder="검색"
          autoFocus={true}
          value={inputState}
          onChange={handleChangeKeyword}
        />
        <L.SearchButton type="button" onClick={() => setKeyword(inputState)}>
          <FaSearch color="white" />
        </L.SearchButton>
      </L.SearchBox>

      {props.group !== 2 && (
        <>
          {!isOpen ? (
            <BsFilterCircle
              size="50"
              style={filterStyle}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <BsFillFilterCircleFill
              size="50"
              style={filterStyle}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          {isOpen && <SearchFilter {...props} />}
        </>
      )}
    </L.SearchWrapper>
  );
}

export default ListSearch;
