import {SET_CURRENT_PAGE, SET_PAGE_SIZE, SET_SORT} from "../reducers/buyers";

export const setSort = ({value, boolean}) => ({type: SET_SORT, payload: {value, boolean}});
export const setPageSize = pageSize => ({type: SET_PAGE_SIZE, payload: pageSize});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, payload: currentPage});
