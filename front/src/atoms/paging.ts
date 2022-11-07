import {atom} from "recoil";


const pagingState = atom<number>({
    key: "pageState",
    default: 1,
});

export default pagingState;
