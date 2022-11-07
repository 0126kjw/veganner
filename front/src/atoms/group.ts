import {atom} from "recoil";


const groupState = atom<number>({
    key: "groupState ",
    default: 1,
});

export default groupState;
