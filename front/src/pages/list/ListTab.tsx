import { useState } from "react";
import listsState from "../../atoms/search";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import * as Api from "../../api/api";
import * as L from "./List.styled";
import { SetStateAction, Dispatch } from "react";

export default function Tab() {
  const [line, setLine] = useState(false);
  const [lists, setLists] = useRecoilState(listsState);
  const [group, setGroup] = useState(0);
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
    <section>
      <L.TabListGroup>
        <L.TabList
          onClick={(e) => setGroup(0)}
          active={group === 0}
        >
          전체
        </L.TabList>
        <L.TabList
          onClick={(e) =>setGroup(1)}
          active={group === 1}
        >
          식당
        </L.TabList>
        <L.TabList
          onClick={(e) => setGroup(2)}
          active={group === 2}
        >
          레시피
        </L.TabList>

        {/* onClick={() => setIndex(item.id)} */}
      </L.TabListGroup>
    </section>
  );
}
