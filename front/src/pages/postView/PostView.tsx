import React, { useState, useEffect } from "react";
import PostViewHead from "./PostViewHead";
import PostViewContent from "./PostViewContent";
import PostViewComment from "./PostViewComment";
import * as Api from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const PostViewLayout = styled.div`
  width: 70%;

  margin: auto;
  padding-top: 75px;
  padding-bottom: 75px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Noto Sans", sans-serif;
  font-weight: 400px;
  font-size: 16px;
  color: #212121;
`;

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

function PostView() {
  const navigate = useNavigate();
  const { postId } = useParams();
  interface Post {
    ID?: number;
    User: string;
    Title: string;
    Content: string;
    Thumbnail?: string;
    Type?: string;
    Hashtag?: string;
    CreationTime?: string;
    Groups: number;
    RestaurantId?: number;
    Address?: string;
    Likes?: number;
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function getPost() {
      try {
        let res = await Api.get(`board/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log("글 불러오기를 실패했습니다.\n", err);
        // navigate("/share", { replace: true });
      }
    }
    getPost();
  }, [postId, navigate]);

  if (post) {
    return (
      <PostViewLayout>
        <PostViewHead post={post}></PostViewHead>
        <PostViewContent post={post}></PostViewContent>
        <PostViewComment post={post}></PostViewComment>
      </PostViewLayout>
    );
    // } else return <ErrorPage> 존재하지 않는 글입니다! </ErrorPage>;
  } else return <ErrorPage></ErrorPage>;
}

export default PostView;
