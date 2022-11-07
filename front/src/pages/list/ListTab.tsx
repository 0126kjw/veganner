import * as L from "./List.styled";
import { SetStateAction, Dispatch } from "react";

interface Props {
  group: number;
  setGroup: Dispatch<SetStateAction<number>>;
}

const tabs = [
  {
    groupIndex: 2,
    groupName: "전체",
  },
  {
    groupIndex: 0,
    groupName: "식당",
  },
  {
    groupIndex: 1,
    groupName: "레시피",
  },
];

export default function Tab({ group, setGroup }: Props) {
  return (
    <L.TabSection>
      <L.TabListGroup>
        {tabs.map((tab) => (
          <L.TabList
            key={tab.groupIndex}
            onClick={() => setGroup(tab.groupIndex)}
            active={group === tab.groupIndex}
          >
            {tab.groupName}
          </L.TabList>
        ))}
      </L.TabListGroup>
    </L.TabSection>
  );
}
