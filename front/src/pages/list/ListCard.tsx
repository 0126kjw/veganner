import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import * as L from "./List.styled";
import listsState from "../../atoms/search";
import { FaRegThumbsUp } from "react-icons/fa";

function ListCard() {
  const navigate = useNavigate();
  const postList = useRecoilValue(listsState);
  const [like, setLike] = useState(0);

console.log("pst",postList)
  return (
    <L.CardLayout>
      {postList?.map((post) => {
        
        return (
          <>
            <L.Card key={post.ID} onClick={() => navigate(`/board/${post.ID}`)}>
              <L.CardHeader>
                <L.CardHeaderProfile></L.CardHeaderProfile>
                <L.CardHeaderText>{post["User"]}</L.CardHeaderText>
                <FaRegThumbsUp />{like}
              </L.CardHeader>
              <L.CardHeaderImage
                src={`../../../../back/${post["Thumbnail"]}`}
              />
              <L.CardBottom>
                <L.CardBottomTitle>{post["Title"]}</L.CardBottomTitle>
                <L.CardBottomDate>{post["CreationTime"]}</L.CardBottomDate>
              </L.CardBottom>
            </L.Card>
          </>
        );
      })}
    </L.CardLayout>
  );
}

export default ListCard;
