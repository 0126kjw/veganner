import Pagination from "react-js-pagination";
import * as S from "../../pages/map/Map.styled";
import "./paging.css";

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
        itemsCountPerPage={10}
        totalItemsCount={item.length}
        pageRangeDisplayed={5}
        onChange={setPage}
      />
    </S.paging>
  );
}
export default Paging;
