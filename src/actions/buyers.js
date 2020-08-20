import {FILTER_BY_NAME} from "../reducers/buyers";

export const setFilterByName = ({id, name, averageCheck, purchases, totalRevenues}) => ({
    type: FILTER_BY_NAME,
    payload: {
        id,
        name,
        averageCheck,
        purchases,
        totalRevenues
    }
})