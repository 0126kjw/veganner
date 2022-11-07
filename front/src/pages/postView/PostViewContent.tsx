import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Api from "../../api/api";
import userState from "../../atoms/user";
import { useRecoilValue } from "recoil";
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

const ViewBottomBlock = styled.div`
  width: 100%;
  display: flex;
`;

// const HashtagBlock = styled.div`
//   flex: none;
//   margin: 0 0 25px 5px;

//   .hashtag {
//     display: inline-block;
//     padding: 6px 10px 5px 10px;
//     border: 1px solid #212121;
//     border-radius: 20px;
//     color: #212121;
//     box-sizing: border-box;
//     font-size: 12px;
//   }
// `;

export const ButtonBlock = styled.div`
  margin-left: auto;
  // display: flex;
  // justify-content: space-around;

  button {
    width: 60px;
    height: 30px;
    border: 1px solid #004d43;
    border-radius: 30px;
    color: #004d43;
    box-sizing: border-box;
    margin: auto 5px;
  }
`;

interface postProps {
  post: any;
}
interface UserData {
  email: string;
}

function PostViewContent({ post }: postProps) {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    async function getUserData() {
      try {
        const res = await Api.get(`user`);
        setUserData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getUserData();
  }, [user]);

  const handleEditButton = () => {
    navigate("edit", {
      state: {
        ...post,
      },
    });
  };

  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      e.preventDefault();

      try {
        let res = await Api.delete(`board/${post.ID}`);
        navigate("/board", { replace: true });
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
      <ViewContentBlock>
        {<div dangerouslySetInnerHTML={{ __html: post.Content }}></div>}
      </ViewContentBlock>
      <ViewBottomBlock>
        {/* <HashtagBlock>
          <div className="hashtag">{post.Hashtag ? post.Hashtag : "#"}</div>
        </HashtagBlock> */}
        {userData && userData.email === post.User && (
          <ButtonBlock>
            <button type="button" onClick={handleEditButton}>
              수정
            </button>
            <button type="button" onClick={handleDelete}>
              삭제
            </button>
          </ButtonBlock>
        )}
      </ViewBottomBlock>
    </>
  );
}

export default PostViewContent;
