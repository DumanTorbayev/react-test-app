export const SET_USER_DATA = 'SET_USER_DATA';

export const initialState = {
   avatar: null,
   userLogin: null,
   message: null
}

const user = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            avatar: action.payload.avatar_url,
            userLogin: action.payload.login,
            message: action.payload.message,
         };
      default:
         return state;
   }
};

export default user;
