import * as S from "./Post.styled";
import React, { useEffect, useRef, useState } from "react";
// import * as Api from "../../api/api";
import { Editor } from "@toast-ui/react-editor";
import Category from "../../components/category/Category";
import Filter from "../../components/filter/Filter";
import TuiEditor, { EditorProps } from "../../components/editor/Editor";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface AddPostProps {
  tuiEditor?: EditorProps;
}

function AddPost({ tuiEditor }: AddPostProps) {
  // 에디터 initialValue
  const defaultContent = "당신의 채식 경험을 공유해 주세요!";
  const navigate = useNavigate();
  // 포스트 제목
  const [title, setTitle] = useState<string>("");
  //const [content, setContent] = useState<string>(defaultContent);
  const [group, setGroup] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File>();

  // editor DOM 선택용
  const editorRef = useRef<Editor>(null);

  const handleThumbnail = async (e: any) => {
    setThumbnail(e.target.files[0]);
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Title", title);
    if (editorRef.current) {
      formData.append("Content", editorRef.current.getInstance().getHTML());
    }
    formData.append("Groups", group.toString());
    formData.append("Address", address);
    formData.append("Type", type);
    if (thumbnail) formData.append("Thumbnail", thumbnail);
    try {
      await axios
        .post("http://kdt-ai5-team01.elicecoding.com:5000/board/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
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
        onChange={(e) => setTitle(e.target.value)}
      />
      <S.ThumbnailInput
        type="file"
        accept="image/*"
        onChange={handleThumbnail}
      />
      {group === 0 && (
        <S.LocationRegisterBar
          type="text"
          placeholder="장소를 검색해 등록해주세요."
        />
      )}
      <Filter
        address={address}
        type={type}
        group={group}
        setAddress={setAddress}
        setType={setType}
      />
      <TuiEditor editorRef={editorRef} initialValue={defaultContent} />
      <S.ButtonBox>
        <S.Button onClick={handleRegister}>등록</S.Button>
        <S.Button onClick={() => navigate(-1)}>취소</S.Button>
      </S.ButtonBox>
    </S.PostLayout>
  );
}

export default AddPost;
