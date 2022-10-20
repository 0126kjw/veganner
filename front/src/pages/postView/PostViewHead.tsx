import React from "react";
import styled from "styled-components";

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
    margin: 0 10px 0 10px;
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

  .like {
    margin-right: 5px;
  }
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
  return (
    <>
      <ViewTitleBlock>
        <div className="label">레시피</div>
        <h1>{post.Title}</h1>
      </ViewTitleBlock>
      <ViewInfoBlock>
        <PostInfoBlock>
          <span className="pic"></span>
          <span>{post.User}</span>
          <span className="infoline"></span>
          <span>{post.CreationTime}</span>
          <span className="infoline"></span>
          <span>양식</span>
        </PostInfoBlock>
        <LikeBlock>
          <span className="like">좋아요</span>
          <span className="count">{post.Likes}</span>
        </LikeBlock>
      </ViewInfoBlock>
      <Line></Line>
    </>
  );
}

export default PostViewHead;
