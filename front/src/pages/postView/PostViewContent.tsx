import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ViewContentBlock = styled.pre`
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: justify;
  white-space: pre-line;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const ButtonBlock = styled.div`
  margin-left: auto;

  button {
    width: 60px;
    height: 30px;
    border: 1px solid #004d43;
    border-radius: 30px;
    color: #004d43;
    box-sizing: border-box;
  }
`;

interface postProps {
  post: any;
}
function PostViewContent({ post }: postProps) {
  const navigate = useNavigate();
  return (
    <>
      <ViewContentBlock>
        {<div dangerouslySetInnerHTML={{ __html: post.Content }}></div>}
      </ViewContentBlock>
      <ButtonBlock>
        <button type="button" onClick={() => navigate("/addPost")}>
          수정
        </button>
        <button>삭제</button>
      </ButtonBlock>
    </>
  );
}

export default PostViewContent;
