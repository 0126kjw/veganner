interface pageProps {
  limit: number;
  page: number;
  setPage: Function;
  blockNum: number;
  setBlockNum: Function;
  counts: number;
}

function Page({
  limit,
  page,
  setPage,
  blockNum,
  setBlockNum,
  counts,
}: pageProps) {
  function createArr(n: number) {
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr;
  } // 새로운 배열을 만들기 위한 함수

  const pageLimit = 5; // 보여줄 페이지네이션 개수

  const totalPage: number = Math.ceil(counts / limit); //총 데이터의 개수(counts)를 한 페이지의 보여줄 데이터(limit)로 나눠 올림을 하면 전체 페이지의 개수가 나온다.

  const blockArea: number = Number(blockNum * pageLimit); // 화면 전환 할 때 보여줄 페이지네이션 개수를 구역으로 지정한다.
  const nArr = createArr(Number(totalPage)); // nArr 함수에 전체 페이지의 개수를 배열로 담는다.
  let pArr = nArr?.slice(blockArea, Number(pageLimit) + blockArea); // 페이지네이션 구역을 nArr 함수에 slice하여 원하는 페이지네이션 block 만 보여 줄 수 있게 설정

  const firstPage = () => {
    setPage(1);
    setBlockNum(0);
  };

  const lastPage = () => {
    setPage(totalPage);
    setBlockNum(Math.ceil(totalPage / pageLimit) - 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      return;
    } // page가 1보다 작거나 같으면 아무 것도 리턴하지 않는다.
    if (page - 1 <= pageLimit * blockNum) {
      setBlockNum((n: number) => n - 1);
    } // 현재 페이지 - 1 이 보여줄 페이지네이션 개수(pageLimit) * blockNum 보다 작거나 같으면 setBlockNum에 - 1 을 작동시킨다.
    setPage((n: number) => n - 1); // setPage를 현재 페이지에서 -1 로 이동시킨다.
  };

  const nextPage = () => {
    if (page >= totalPage) {
      return;
    } // page가 마지막 페이지보다 크거나 같으면 아무 것도 리턴하지 않는다.
    if (pageLimit * Number(blockNum + 1) < Number(page + 1)) {
      setBlockNum((n: number) => n + 1);
    } //보여줄 페이지네이션 개수(pageLimit) * (blockNum+1) 가 page + 1보다 작다면 setBlockNum은 현재 페이지 + 1을 한다.
    setPage((n: number) => n + 1); //setPage에 현재 페이지 + 1을 한다.
  };

  return (
    <div className="ListPagenationWrapper">
      <button
        className="moveToFirstPage"
        onClick={() => {
          firstPage();
        }}
      >
        &lt;&lt;
      </button>
      <button
        className="moveToPreviousPage"
        onClick={() => {
          prevPage();
        }}
        disabled={page === 1}
      >
        &lt;
      </button>
      <div className="pageBtnWrapper">
        {pArr.map((n: number) => (
          <button
            className="pageBtn"
            key={n}
            onClick={() => {
              setPage(n);
            }}
            aria-current={page === n ? "page" : undefined}
          >
            {n}
          </button>
        ))}
      </div>
      <button
        className="moveToNextPage"
        onClick={() => {
          nextPage();
        }}
        disabled={page === totalPage}
      >
        &gt;
      </button>
      <button
        className="moveToLastPage"
        onClick={() => {
          lastPage();
        }}
      >
        &gt;&gt;
      </button>

      <style>
        {`
            .ListPagenationWrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 37px;
              margin: 38px 94px 38px 88px;
              }
  
              .moveToPreviousPage,
              .moveToNextPage {
                color: #5a5a5a;
                background-color: transparent;
                border: none;
                font-size: 25px;
                cursor: pointer;
              }
  
              .moveToFirstPage,
              .moveToLastPage {
                width: 115px;
                height: 37px;
                margin: 0 0 0 0;
                border: none;
                color: black;
                background-color: transparent;
                cursor: pointer;
              }
  
              .pageBtn {
                width: 49px;
                height: 49px;
                margin: 0 10px;
                border: none;
                color: black;
                font-size: 20px;
                opacity: 0.2;
  
                &:hover {
                  background-color: #b42954;
                  cursor: pointer;
                  transform: translateY(-2px);
                }
  
                &[disbled] {
                  background-color: #e2e2e2;
                  cursor: revert;
                  transform: revert;
                }
  
                &[aria-current] {
                  background-color: #f5d3dd;
                  font-weight: bold;
                  cursor: revert;
                  transform: revert;
                  opacity: 1;
                }
              }          
          `}
      </style>
    </div>
  );
}

export default Page;
