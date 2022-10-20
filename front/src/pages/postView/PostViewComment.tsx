import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Api from "../../api/api";

const ViewCommentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentLabel = styled.div`
  line-height: 19px;
  width: 100%;
  margin-bottom: 10px;
  margin-left: 5px;

  .label {
    margin-right: 5px;
  }
  .count {
    color: #004d43;
  }
`;

const InputBox = styled.div`
  border: 0.5px solid;
  width: 100%;
  height: 135px;
  margin-top: 15px;
  margin-bottom: 20px;
  // padding: 20px 0 20px 0;
  position: relative;

  display: flex;

  align-items: center;
  text-align: justify;

  textarea {
    width: 100%;
    height: 125px;
    // display: block;
    padding: 5px;
    border: none;
    &:focus {
      outline: none;
    }
    resize: none;
    white-space: pre;
    background-color: #f1f1f1;
  }

  textarea::placeholder {
    margin: 15px 0 0 15px;
    color: #21212180;
  }

  button {
    width: 60px;
    height: 30px;
    border: 1px solid #21212180;
    border-radius: 30px;
    color: #21212180;
    box-sizing: border-box;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Line = styled.div`
  width: 100%;
  border: 0.5px solid #21212180;
`;

const CommentsWrapper = styled.div`
  .comment {
    margin: 15px 0 15px 5px;
  }

  button {
    color: #21212180;
    border: none;
    margin-bottom: 15px;
  }
`;

const CommentsInfo = styled.div`
  display: flex;
  margin: 25px 5px 10px 5px;

  .pic {
    width: 20px;
    height: 20px;
    background-color: #21212180;
    border-radius: 50%;
    float: left;
    // margin-right: 10px;
  }
  p {
    margin: 0 10px 0 10px;
  }
  .date {
    margin: 0 5px 0 5px;
    color: #21212180;
  }
`;

interface postProps {
  post: any;
}
function PostViewComment({ post }: postProps) {
  interface Comment {
    CommentId?: number;
    User_id: string;
    Comment: string;
    CreationTime?: string;
    PostId: number;
  }
  const [comment, setComment] = useState<Comment>({
    User_id: post.User,
    PostId: post.ID,
    Comment: "",
  });

  const [comments, setComments] = useState<Array<Comment>>([]);

  async function getComments() {
    try {
      const res = await Api.get(`board/${post.ID}/comments`);
      // const res = await Api.get(`board/5/comments`);
      setComments([...res.data]);
      console.log(res);
    } catch (err) {
      console.log("댓글 불러오기에 실패했습니다.\n", err);
    }
  }

  useEffect(() => {
    // if (!comment.PostId_id) {
    //   return;
    // }
    getComments();
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    setComment({
      CommentId: comments.length + 1,
      ...comment,
      Comment: text,
      CreationTime: new Date().toDateString(),
    });
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    const commentsList = [...comments, comment];
    setComments(commentsList);

    setComment({
      User_id: post.User,
      PostId: post.ID,
      Comment: "",
    });

    try {
      console.log(comment);
      const res = await Api.post(
        `board/${post.ID}/comments/`,
        // `board/5/comments/`,
        comment
        // withCredentials: true,
      );
      console.log("댓글 작성에 성공했습니다.\n", res);
    } catch (err) {
      console.log("댓글 작성에 실패했습니다.\n", err);
    }
  }

  return (
    <ViewCommentBlock>
      <CommentLabel>
        <span className="label">댓글</span>
        <span className="count">{comments.length}</span>
      </CommentLabel>
      <Line></Line>
      <InputBox>
        <textarea
          placeholder="로그인하고 댓글을 입력해보세요."
          onChange={handleInput}
          value={comment.Comment}
        />
        <button type="button" onClick={handleSubmit}>
          작성
        </button>
      </InputBox>
      {comments.map((element): any => {
        return (
          <CommentsWrapper>
            <CommentsInfo>
              <span className="pic"></span>
              <p>{element.User_id}</p>
              <span className="date">{element.CreationTime}</span>
            </CommentsInfo>
            <div className="comment">{element.Comment}</div>
            <button>답글</button>
          </CommentsWrapper>
        );
      })}
    </ViewCommentBlock>
  );
}

export default PostViewComment;

// {addComment.map((element,index) => {
//   return <Comment
//     value={element}
//     isLogined={isLogined}
//     key={element.date+JSON.stringify(index)}
//     onDelete={onClickDeleteHandler}
//     />
// })}
