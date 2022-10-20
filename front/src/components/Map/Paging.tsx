import React, { useState } from "react";
import Pagination from "react-js-pagination";
import * as S from "../../pages/map/Map.styled";

interface PagingProps {
  item: any;
  page: number;
  setPage: any;
}

function Paging({ item, page, setPage }: PagingProps) {
  return (
    <S.paging>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={item.length}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={setPage}
      />
    </S.paging>
  );
}
export default Paging;
