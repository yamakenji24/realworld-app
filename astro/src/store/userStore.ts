import { atom, map, action } from "nanostores";
import { getUserInfoService } from "../services/get-user";

export const isUserLogin = atom(false);

export const checkUserLogin = action(
  isUserLogin,
  "userLoginChecked",
  (store) => {
    const token = localStorage.getItem("tk");
    if (token) {
      store.set(true);
      getUserInfo(token)
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

export const getUserInfo = action(userInfo, "getUserInfo", async (store, token: string) => {
  const islogin = isUserLogin.get();
  if (islogin && token) {
    const userInfo = await getUserInfoService({ token });
    if (userInfo) {
      store.set(userInfo);
    }
  }
});

const updateUserSetting = action(userInfo, 'updateUserSettiing', (store) => {
  
})