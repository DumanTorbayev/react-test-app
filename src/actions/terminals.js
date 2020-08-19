import {SET_DELETE_ITEM, SET_TERMINAL_DESCRIPTION} from "../reducers/terminals";

export const setTerminalData = (name, description) => ({
   type: SET_TERMINAL_DESCRIPTION,
   payload: {name, description}
});

export const handleDeleteItem = index => ({type: SET_DELETE_ITEM, payload: index})
