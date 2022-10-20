// import * as S from "../addPost/Post.styled";
// import { useEffect, useRef, useState } from "react";
// import * as Api from "../../api/api";
// import { Editor } from "@toast-ui/react-editor";
// import Category from "../../components/category/Category";
// import Filter from "../../components/filter/Filter";
// import TuiEditor from "../../components/editor/Editor";
// import { EditorProps } from "../../components/editor/Editor";
// import axios from "axios";

// interface EditPostProps {
//   tuiEditor?: EditorProps;
// }

function EditPost() {
  return <></>;
}

// function EditPost({ tuiEditor }: EditPostProps) {
//   //임시로 가져온 post
//   // const [post, setPost] = useState<object>({
//   //   title: "",
//   //   content: "",
//   //   group: 0,
//   // });
//   // const getPost = async () => {
//   //   const res = await Api.get("board/21/");
//   //   setPost(res);
//   // };
//   // useEffect(() => {
//   //   getPost();
//   // }, []);

//   // const [title, setTitle] = useState<string>(post.title);
//   // const [content, setContent] = useState<string>(post.content);
//   // const [group, setGroup] = useState<number>(post.group);
//   // const [type, setType] = useState<string>("");

//   //editor DOM 선택용
//   const editorRef = useRef<Editor>(null);
//   const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     // console.log(editorRef.current?.getInstance().getHTML());
//     // console.log(editorRef.current?.getInstance().getMarkdown());

//     // if (editorRef.current) {
//     //   setContent(editorRef.current.getInstance().getHTML());
//     // }
//     // const updatePost = {
//     //   Title: title,
//     //   Content: content,
//     //   Groups: group,
//     //   //Types: type,
//     // };
//     // try {
//     //   await Api.put("board/21", updatePost);

//     //   // const res = await Api.get("board");
//     //   // setPost(res.data);
//     // } catch (e) {
//     //   console.error(e);
//     // }
//   };

//   // 이미지 base64 처리
//   useEffect(() => {
//     if (editorRef.current) {
//       // // 전달받은 html값으로 초기화
//       // if (editor?.htmlStr) {
//       //   editorRef.current.getInstance().setHTML(editor?.htmlStr);
//       // }
//       // 기존 이미지 업로드 기능 제거
//       editorRef.current.getInstance().removeHook("addImageBlobHook");
//       // 이미지 서버로 데이터를 전달하는 기능 추가
//       editorRef.current
//         .getInstance()
//         .addHook("addImageBlobHook", (blob, callback) => {
//           (async () => {
//             const formData = new FormData();
//             formData.append("image", blob);
//             axios.defaults.withCredentials = true;
//             // const res = await Api.post("board/uploadedImg/", {
//             //   data: formData,
//             //   headers: { "Content-type": "multipart/form-data" },
//             // });
//             const { data: url } = await axios.post(
//               "http://localhost:8000/img/",
//               formData,
//               {
//                 headers: { "Content-type": "multipart/formdata" },
//               }
//             );
//             console.log(
//               `%cPOST 요청 데이터: ${JSON.stringify(url)}`,
//               "color: #296aba;"
//             );

//             callback(url, "input alt text");
//             console.log(url);
//           })();

//           return false;
//         });
//     }
//   }, [editorRef]);

//   return (
//     <>
//       <S.PostLayout>
//         {/* <Category setGroup={setGroup} />
//         <S.TitleInput
//           type="text"
//           value={title}
//           placeholder="제목"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <S.SearchBar type="text" placeholder="장소를 검색해 등록해주세요." />
//         <Filter />
//         <TuiEditor editorRef={editorRef} initialValue={content} />
//         <S.ButtonBox>
//           <S.Button onClick={handleRegister}>수정</S.Button>
//           <S.Button>취소</S.Button>
//         </S.ButtonBox> */}
//       </S.PostLayout>
//     </>
//   );
// }

export default EditPost;
