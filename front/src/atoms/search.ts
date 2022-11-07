import {atom} from "recoil";


const listsState = atom<any[]>({
    key: "listsState",
    default: [],
});

export default listsState;
