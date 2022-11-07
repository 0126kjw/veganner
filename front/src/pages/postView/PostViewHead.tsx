import styled from "styled-components";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import * as Api from "../../api/api";
import profile from "../../assets/img/profile.png";

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
    font-size: 20px;
    margin-bottom: 10px;
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
  // .pic {
  //   width: 20px;
  //   height: 20px;
  //   background-color: #21212180;
  //   border-radius: 50%;
  //   float: left;
  //   // margin-right: 10px;
  // }
`;

const UserProfile = styled.span`
  width: 30.37px;
  height: 30px;
  background: #a5a5a5;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3%;
  background-image: url(${profile});
  background-size: cover;
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
  width: 100%;
  border: 0.5px solid #21212180;
`;

interface postProps {
  post: any;
  like: number;
  liked: boolean;
  handleLike: any;
}
function PostViewHead({ post, like, liked, handleLike }: postProps) {
  return (
    <>
      <ViewTitleBlock>
        <div className="label">{post.Groups === 0 ? "식당" : "레시피"}</div>
        <h1>{post.Title}</h1>
      </ViewTitleBlock>
      <ViewInfoBlock>
        <PostInfoBlock>
          <UserProfile></UserProfile>
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
            <FaThumbsUp onClick={handleLike} style={{ cursor: "pointer" }} />
          ) : (
            <FaRegThumbsUp onClick={handleLike} style={{ cursor: "pointer" }} />
          )}
          {/* <span className="count">{post.Likes ? post.Likes : 0}</span> */}
          <span className="count">{like}</span>
        </LikeBlock>
      </ViewInfoBlock>
      <Line></Line>
    </>
  );
}

export default PostViewHead;
