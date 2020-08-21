import {SORT_BY_AVERAGE_CHECK, SORT_BY_PURCHASES, SORT_BY_TOTAL_REVENUES} from "../reducers/buyers";

export const setSortByAverageCheck = () => ({type: SORT_BY_AVERAGE_CHECK});
export const setSortByPurchases = () => ({type: SORT_BY_PURCHASES});
export const setSortByTotalRevenues = () => ({type: SORT_BY_TOTAL_REVENUES});
