import {atom} from "recoil";

const addressState = atom<string>({
    key: "addressState ",
    default: "전체",
});

export default addressState;
