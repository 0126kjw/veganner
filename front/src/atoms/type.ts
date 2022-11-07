import {atom} from "recoil";

const typeState = atom<string>({
    key: "typeState",
    default: "전체",
});

export default typeState;
