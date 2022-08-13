import { atom, map, action } from "nanostores";

export const isUserLogin = atom(false);

export const updateUserLogin = action(
  isUserLogin,
  "userLoginUpdated",
  (store, userState: boolean) => {
    const token = localStorage.getItem("tk")
    if (token) {
      store.set(userState);
    }
  }
);

export interface UserInfo {
  email: string;
  token?: string;
  username: string;
  bio: string;
  image: string;
}
export const userInfo = map<UserInfo>({
  email: "",
  username: "",
  bio: "",
  image: "",
});

export const updateUserInfo = action(
  userInfo,
  "userInfoUpdated",
  (store, newUserInfo: UserInfo) => {
    store.set(newUserInfo);
  }
);
