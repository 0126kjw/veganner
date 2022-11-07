import * as S from "../addPost/Post.styled";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import Category from "../../components/category/Category";
import Filter from "../../components/filter/Filter";
import TuiEditor from "../../components/editor/Editor";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
// import * as Api from "../../api/api";

function EditPost() {
  // 에디터 initialValue
  // const defaultContent = "당신의 채식 경험을 공유해 주세요!";
  const location = useLocation();
  const navigate = useNavigate();

  const post = location.state;
  // 포스트 제목
  const [title, setTitle] = useState<string>(post.Title);
  //const [content, setContent] = useState<string>(post.Content);
  const [group, setGroup] = useState<number>(post.Groups);
  const [address, setAddress] = useState<string>(post.Address);
  const [type, setType] = useState<string>(post.Type);
  const [thumbnail, setThumbnail] = useState<File>(post.Thumbnail);

  // editor DOM 선택용
  const editorRef = useRef<Editor>(null);
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setHTML(post.Content);
    }
  }, [post.Content]);

  const handleThumbnail = async (e: any) => {
    setThumbnail(e.target.files[0]);
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 예외처리(레시피는 주소 항목 없음.)
    if (group === 1) {
      setAddress("");
    }
    const formData = new FormData();
    formData.append("Title", title);
    if (editorRef.current) {
      formData.append("Content", editorRef.current.getInstance().getHTML());
    }
    formData.append("Groups", group.toString());
    formData.append("Address", address);
    formData.append("Type", type);
    if (thumbnail) formData.append("Thumbnail", thumbnail);
    formData.append("User", post.User);

    try {
      await axios
        .put(
          `http://kdt-ai5-team01.elicecoding.com:5000/board/${post.ID}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          navigate(`/board/${res.data.ID}`);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.PostLayout>
      <Category group={group} setGroup={setGroup} />
      <S.TitleInput
        type="text"
        value={title}
        placeholder="제목"
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <S.ThumbnailInput
        type="file"
        accept="image/*"
        onChange={handleThumbnail}
      />
      <S.LocationRegisterBar
        type="text"
        placeholder="장소를 검색해 등록해주세요."
      />
      <Filter
        address={address}
        type={type}
        group={group}
        setAddress={setAddress}
        setType={setType}
      />
      <TuiEditor editorRef={editorRef} />
      <S.ButtonBox>
        <S.Button onClick={handleRegister}>등록</S.Button>
        <S.Button onClick={() => navigate(-1)}>취소</S.Button>
      </S.ButtonBox>
    </S.PostLayout>
  );
}

export default EditPost;
