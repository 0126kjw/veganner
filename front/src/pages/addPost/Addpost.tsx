import * as S from "./Post.styled";
import React, { useEffect, useRef, useState } from "react";
import * as Api from "../../api/api";
import { Editor } from "@toast-ui/react-editor";
import Category from "../../components/category/Category";
import Filter from "../../components/filter/Filter";
import TuiEditor from "../../components/editor/Editor";
import { EditorProps } from "../../components/editor/Editor";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AddPostProps {
  tuiEditor?: EditorProps;
}

function AddPost({ tuiEditor }: AddPostProps) {
  // 에디터 initialValue
  const defaultContent = "당신의 채식 경험을 공유해 주세요!";
  const navigate = useNavigate();
  // 포스트 제목
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(defaultContent);
  const [group, setGroup] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File>();

  // editor DOM 선택용
  const editorRef = useRef<Editor>(null);
  useEffect(() => {
    if (editorRef.current) {
      //console.log(editorRef.current?.getInstance().getHTML());
      // console.log(editorRef.current?.getInstance().getMarkdown());
      setContent(editorRef.current.getInstance().getHTML());
    }
  }, [editorRef]);

  const handleThumbnail = async (e: any) => {
    setThumbnail(e.target.files[0]);
    //console.log(typeof formData);
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getHTML());
      console.log(editorRef.current.getInstance().getHTML());
    }
    // 예외처리(레시피는 주소 항목 없음.)
    if (group === 1) {
      setAddress("");
    }
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Content", content);
    formData.append("Groups", group.toString());
    formData.append("Address", address);
    formData.append("Type", type);
    if (thumbnail) formData.append("Thumbnail", thumbnail);

    try {
      const res = await axios.post("http://localhost:8000/board/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(JSON.stringify(res.data));
      // navigate('/board/${res.data.ID}')
    } catch (err) {
      console.log(err);
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
      <TuiEditor editorRef={editorRef} initialValue={defaultContent} />
      <S.ButtonBox>
        <S.Button onClick={handleRegister}>등록</S.Button>
        <S.Button>취소</S.Button>
      </S.ButtonBox>
    </S.PostLayout>
  );
}

export default AddPost;
