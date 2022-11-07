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
  // Likes: number;
}

function PostView() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [like, setLike] = useState(0);

  useEffect(() => {
    async function getPost() {
      try {
        const board = await Api.get(`board/${postId}`);
        setPost(board.data);
        const like = await Api.get(`board/${postId}/like`);
        // setPost({
        //   ...board.data,
        //   Likes: like.data,
        // });
        setLike(like.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPost();
  }, [postId, navigate]);

  const [liked, setLiked] = useState(false);

  async function handleLike() {
    try {
      const res = await Api.post(`board/${postId}/like/`);
      const like = await Api.get(`board/${postId}/like`);
      setLike(like.data);
      // post.Likes = like.data;
      // setPost({
      //   ...post,
      //   Likes: like.data,
      // })
      liked ? setLiked(false) : setLiked(true);
    } catch (err) {
      console.error(err);
    }
  }

  if (post) {
    return (
      <PostViewLayout>
        <PostViewHead
          post={post}
          like={like}
          liked={liked}
          handleLike={handleLike}
        ></PostViewHead>
        <PostViewContent post={post}></PostViewContent>
        <PostViewComment post={post}></PostViewComment>
      </PostViewLayout>
    );
    // } else return <ErrorPage> 존재하지 않는 글입니다! </ErrorPage>;
  } else return <ErrorPage></ErrorPage>;
}

export default PostView;
