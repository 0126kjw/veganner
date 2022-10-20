import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import * as Api from "../../api/api";
export interface EditorProps {
  editorRef: React.ForwardedRef<Editor>;
  initialValue: string;
}

function TuiEditor(props: EditorProps) {
  const onUploadImage = async (blob: any, callback: any) => {
    console.log(blob);
    const formData = new FormData();
    formData.append("Image", blob);
    console.log(formData);

    const { data: url } = await axios.post(
      "http://localhost:8000/board/img/",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(url["Image"]);
    const imgSrc = `http://localhost:8000/board+${url["Image"]}`;
    callback(url["Image"], "이미지");
  };

  return (
    <EditorLayout>
      <Editor
        initialValue={props.initialValue}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        ref={props.editorRef}
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
      />
    </EditorLayout>
  );
}

export const EditorLayout = styled.div`
  display: block;
  height: 700px;
`;

export default TuiEditor;
