export const SET_AUTH = 'SET_AUTH';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_PASS_CHECK = 'SET_PASS_CHECK';
export const SET_AVATAR = 'SET_AVATAR';

export const initialState = {
   isAuth: false,
   login: null,
   password: null,
   passCheck: false,
   avatar: null
}

const auth = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH:
         return {
            ...state,
            isAuth: true
         };
      case SET_LOGIN:
         return {
            ...state,
            login: action.payload
         };
      case SET_PASSWORD:
         return {
            ...state,
            password: action.payload
         };
      case SET_PASS_CHECK:
         return {
            ...state,
            passCheck: action.payload
         };
      case SET_AVATAR:
         return {
            ...state,
            avatar: action.payload
         };
      default:
         return state;
   }
};

export default auth;
