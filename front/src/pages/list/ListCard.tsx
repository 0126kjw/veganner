import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import * as L from "./List.styled";
import listsState from "../../atoms/search";

function ListCard() {
  const navigate = useNavigate();
  const postList = useRecoilValue(listsState);

  useEffect(() => {
    console.log("list", postList);
  }, [postList]);

  return (
    <L.CardLayout>
      {postList.map((post) => {
        console.log(post);
        return (
          <L.Card key={post.ID} onClick={() => navigate(`/board/${post.ID}`)}>
            <L.CardHeader>
              <L.CardHeaderProfile></L.CardHeaderProfile>
              <L.CardHeaderText>{post["User"]}</L.CardHeaderText>
            </L.CardHeader>
            <L.CardHeaderImage src={`../../../../back/${post["Thumbnail"]}`} />
            <L.CardBottom>
              <L.CardBottomTitle>{post["Title"]}</L.CardBottomTitle>
              <L.CardBottomDate>{post["CreationTime"]}</L.CardBottomDate>
            </L.CardBottom>
          </L.Card>
        );
      })}
    </L.CardLayout>
  );
}

export default ListCard;
