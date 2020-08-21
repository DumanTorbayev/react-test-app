export const SET_USER_DATA = 'SET_USER_DATA';

export const initialState = {
   login: null,
   avatar: null,
   message: null,
}

const auth = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            login: action.payload.login,
            avatar: action.payload.avatar,
            message: action.payload.message,
         };
      default:
         return state;
   }
};

export default auth;
