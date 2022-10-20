import styled from "styled-components";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import * as Api from "../../api/api";

const ViewTitleBlock = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    height: 67px;
    font-weight: 500;
    font-size: 40px;
  }
  .label {
    height: 27px;
    font-weight: 600;
    color: #004d43;
  }
`;

const ViewInfoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 15px 15px 15px;

  span {
    margin: 0 5px 0 5px;
  }
`;

const PostInfoBlock = styled.div`
  flex: none;
  .infoline {
    border: 0.5px solid #21212180;
    transform: rotate(0.95deg);
  }
  .pic {
    width: 20px;
    height: 20px;
    background-color: #21212180;
    border-radius: 50%;
    float: left;
    // margin-right: 10px;
  }
`;

const LikeBlock = styled.div`
  margin-left: auto;
  flex: none;
  align-items: center;

  .count {
    color: #004d43;
  }
`;

const Line = styled.div`
  width: 1070px;
  border: 0.5px solid #21212180;
`;

interface postProps {
  post: any;
}
function PostViewHead({ post }: postProps) {
  const [liked, setLiked] = useState(false);

  async function handleLike() {
    try {
      let res = await Api.post(`board/${post.ID}/like/`);
      console.log("좋아요 성공\n", res);

      liked ? setLiked(false) : setLiked(true);
    } catch (err) {
      console.log("좋아요 실패\n", err);
    }
  }

  useEffect(() => {
    async function getLikeData() {
      try {
        const res = await Api.get(`board/${post.ID}/like`);
        post.Likes = res.data;
        console.log("좋아요 수 조회에 성공했습니다.\n", res);
      } catch (err) {
        console.log("좋아요 수 조회에 실패했습니다.\n", err);
      }
    }
    getLikeData();
  }, [post, post.Likes]);

  return (
    <>
      <ViewTitleBlock>
        <div className="label">{post.Groups === 1 ? "식당" : "레시피"}</div>
        <h1>{post.Title}</h1>
      </ViewTitleBlock>
      <ViewInfoBlock>
        <PostInfoBlock>
          <span className="pic"></span>
          <span>{post.User}</span>
          <span className="infoline"></span>
          <span>
            {typeof post.CreationTime === "string"
              ? post.CreationTime.split("T")[0]
              : post.CreationTime}
          </span>
          <span className="infoline"></span>
          <span>{post.Type}</span>
        </PostInfoBlock>
        <LikeBlock>
          {liked ? (
            <FaThumbsUp onClick={handleLike} />
          ) : (
            <FaRegThumbsUp onClick={handleLike} />
          )}
          <span className="count">{post.Likes ? post.Likes : 0}</span>
        </LikeBlock>
      </ViewInfoBlock>
      <Line></Line>
    </>
  );
}

export default PostViewHead;
