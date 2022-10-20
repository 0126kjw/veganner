import React, { useState, useEffect } from "react";
import Search from "../list/Search";
import List from "../list/List";
import { createGlobalStyle } from "styled-components";
import PostViewHead from "./PostViewHead";
import PostViewContent from "./PostViewContent";
import PostViewComment from "./PostViewComment";
import * as Api from "../../api/api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
`;

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

function PostView() {
  interface Post {
    Type: string;
    Title: string;
    Thumbnail?: string;
    CreationTime?: string;
    User: string;
    Likes: number;
    Hashtag?: string;
  }

  const [post, setPost] = useState<Post>({
    Type: "",
    Title: "",
    Thumbnail: "",
    User: "",
    Likes: 0,
    Hashtag: "#",
  });

  const { postId } = useParams();
  console.log(postId);
  //const item = getPost(postId);

  useEffect(() => {
    async function getPost() {
      try {
        const res = await Api.get(`board/${postId}`);
        console.log(res.data);
        setPost(res.data);
      } catch (err) {
        console.log("글 불러오기를 실패했습니다.\n", err);
      }
    }
    getPost();
  }, [postId]);

  // useEffect(() => {
  //   console.log(match);
  //   getPost(match.params.id);
  // }, []);

  return (
    <>
      <GlobalStyle />
      <PostViewLayout>
        <PostViewHead post={post}></PostViewHead>
        <PostViewContent post={post}></PostViewContent>
        <PostViewComment post={post}></PostViewComment>
      </PostViewLayout>
    </>
  );
}

export default PostView;
