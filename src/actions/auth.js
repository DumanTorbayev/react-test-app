import {SET_USER_DATA} from "../reducers/auth";

export const setUserData = ({avatar_url, message, login}) => ({
   type: SET_USER_DATA,
   payload: { avatar_url, message, login},
})
