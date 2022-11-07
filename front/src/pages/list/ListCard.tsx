import { useNavigate } from "react-router-dom";
import * as L from "./List.styled";
import { FaRegThumbsUp } from "react-icons/fa";
import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";


interface Props {
  postList: {
    ID: number;
    Groups: number;
    Type: string;
    Title: string;
    Thumbnail: string;
    CreationTime: string;
    User: string;
    Likes: number;
  }[];
}

function ListCard({ postList }: Props) {
  const navigate = useNavigate();

  return (
    <L.CardLayout>
      {postList.map((post) => {
        return (
          <>
            <L.Card key={post.ID} onClick={() => navigate(`/board/${post.ID}`)}>
              <L.CardHeader>
                <L.CardWrap>
                  <L.CardHeaderProfile></L.CardHeaderProfile>
                  <L.CardHeaderText>{post.User}</L.CardHeaderText>
                  <L.likeWrap>
                    <FaRegThumbsUp size="16" style={{ marginTop: "4px" }} />
                    {post.Likes}
                  </L.likeWrap>
                </L.CardWrap>
              </L.CardHeader>
              <L.imgWrapper
                backgroundImage={`http://kdt-ai5-team01.elicecoding.com:5000/board/img/${post.Thumbnail}`}
              />

              <L.CardBottom>
                <L.CardBottomTitle>{post.Title}</L.CardBottomTitle>
                <L.CardBottomDate>
                  {format(new Date(post.CreationTime), "yy-MM-dd", {
                    locale: ko,
                  })}
                </L.CardBottomDate>
              </L.CardBottom>
            </L.Card>
          </>
        );
      })}
    </L.CardLayout>
  );
}

export default ListCard;
