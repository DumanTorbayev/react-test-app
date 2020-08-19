import {SET_USER_DATA} from "../reducers/user";

export const setUserData = ({avatar_url, login, message}) => ({
   type: SET_USER_DATA,
   payload: {avatar_url, login, message},
})
