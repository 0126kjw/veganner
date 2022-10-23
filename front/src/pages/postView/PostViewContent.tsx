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

const HashtagBlock = styled.div`
  flex: none;
  margin: 0 0 25px 5px;

  .hashtag {
    display: inline-block;
    padding: 6px 10px 5px 10px;
    border: 1px solid #212121;
    border-radius: 20px;
    color: #212121;
    box-sizing: border-box;
    font-size: 12px;
  }
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
        console.log("유저 정보 가져오기에 성공했습니다.\n", res);
      } catch (err) {
        console.log("유저 정보 가져오기에 실패했습니다.\n", err);
      }
    }
    getUserData();
  }, [user]);

  // console.log(user); //로그인: undefined, 로그아웃: null
  // if (user) console.log("로그인한 유저:", userData);
  // console.log("글 작성자:", post.User);
  // if (userData && userData.email === post.User) {
  //   console.log("같은 유저입니다.");
  // }

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
        console.log("글 삭제에 성공했습니다.\n", res);
        console.log(res.data);

        navigate("/share", { replace: true });
      } catch (err) {
        console.log("글 삭제에 실패했습니다.\n", err);
      }
    }
  }

  return (
    <>
      <ViewContentBlock>
        {<div dangerouslySetInnerHTML={{ __html: post.Content }}></div>}
      </ViewContentBlock>
      <ViewBottomBlock>
        <HashtagBlock>
          <div className="hashtag">{post.Hashtag ? post.Hashtag : "#"}</div>
        </HashtagBlock>
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
