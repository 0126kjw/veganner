import { atom } from "recoil";

interface User {
  email: string | null;
  password: string | null;
}

const userState = atom<User | null>({
  key: "userState",
  default: null,
});

export default userState;
