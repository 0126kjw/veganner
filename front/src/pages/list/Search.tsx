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
import { RiFilter3Fill, RiH3 } from "react-icons/ri";
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
    <L.searchWrap>
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
            <FaSearch color="white" size="18" />
          </L.SearchButton>
        </L.SearchBox>
        {props.group !== 2 && (
          <>
            {!isOpen ? (
              <L.FilterButton
                backgroundColor="#f1f1f1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <RiFilter3Fill color="#212121" size="25" />
              </L.FilterButton>
            ) : (
              <L.FilterButton
                backgroundColor="#212121"
                onClick={() => setIsOpen(!isOpen)}
              >
                <RiFilter3Fill color="#f1f1f1" size="25" />
              </L.FilterButton>
            )}
          </>
        )}
      </L.SearchWrapper>
      {isOpen && <SearchFilter {...props} />}
    </L.searchWrap>
  );
}

export default ListSearch;
