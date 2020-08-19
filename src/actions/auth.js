import {SET_AUTH, SET_AVATAR, SET_LOGIN, SET_PASS_CHECK, SET_PASSWORD} from "../reducers/auth";

export const setAuthSuccess = () => ({type: SET_AUTH});
export const setLoginValue = value => ({type: SET_LOGIN, payload: value});
export const setPassword = value => ({type: SET_PASSWORD, payload: value});
export const setPassCheck = value => ({type: SET_PASS_CHECK, payload: value});
export const setAvatar = value => ({type: SET_AVATAR, payload: value});
