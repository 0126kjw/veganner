import { useState, useEffect } from "react";
import listsState from "../../atoms/search";
import groupState from "../../atoms/group";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import * as Api from "../../api/api";
import * as L from "./List.styled";
import { SetStateAction, Dispatch } from "react";
import axios from "axios";

export default function Tab() {
  const [line, setLine] = useState(false);
  const [lists, setLists] = useRecoilState(listsState);
  const [group, setGroup] = useRecoilState(groupState);
  useEffect(() => {
    const userData = async () => {
      if (group == 0) {
        await Api.get("board").then((res) => {
          setLists(res.data.list);
          console.log("list",lists)
          // setCurrentPosts(res.data.patientList.slice(indexOfFirstPost, indexOfLastPost))
        });
      }
      await axios
        .get(`board?Groups=${group}`, {
          // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setLists(res.data.list);
          console.log("list",lists)
          // setCurrentPosts(res.data.patientList.slice(indexOfFirstPost, indexOfLastPost))
        });
    };
    userData();
    console.log("list", lists);
    // const lists=useRecoilValue(listsState)
  }, [group]);

  // const data = [
  //   {
  //     id: 0,
  //     title: "HTML",
  //     description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
  //   },
  //   {
  //     id: 1,
  //     title: "CSS",
  //     description: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
  //   },
  //   {
  //     id: 2,
  //     title: "JavaScript",
  //     description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
  //   }
  // ];

  return (
    <L.TabSection>
      <L.TabListGroup>
        <L.TabList onClick={(e) => setGroup(0)} active={group === 0}>
          전체
        </L.TabList>
        <L.TabList onClick={(e) => setGroup(1)} active={group === 1}>
          식당
        </L.TabList>
        <L.TabList onClick={(e) => setGroup(2)} active={group === 2}>
          레시피
        </L.TabList>

        {/* onClick={() => setIndex(item.id)} */}
      </L.TabListGroup>
    </L.TabSection>
  );
}
