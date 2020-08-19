export const SET_TERMINAL_DESCRIPTION = 'SET_TERMINAL_DESCRIPTION';
export const SET_DELETE_ITEM = 'SET_DELETE_ITEM';

export const initialState = {
   items: [],
}

const terminal = (state = initialState, action) => {
   switch (action.type) {
      case SET_TERMINAL_DESCRIPTION:
         return {
            ...state,
            items: [
               ...state.items,
               {
                  id: Date.now(),
                  name: action.payload.name,
                  description: action.payload.description,
               }
            ],
         };
      case SET_DELETE_ITEM:
         return {
            ...state,
            items: [
               ...state.items
            ]
         }
      default:
         return state;
   }
};

export default terminal;
