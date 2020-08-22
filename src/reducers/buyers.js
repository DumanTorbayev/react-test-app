export const SET_SORT = 'SET_SORT';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const initialState = {
    pageSize: 5,
    currentPage: 1,
    paginateCount: {pageCountForPaginate: 5},
    buyers: [
        {
            id: 1,
            name: 'Иван',
            averageCheck: 100,
            purchases: 5,
            totalRevenues: 500
        },
        {
            id: 2,
            name: 'Игорь',
            averageCheck: 200,
            purchases: 2,
            totalRevenues: 400
        },
        {
            id: 3,
            name: 'Иван',
            averageCheck: 50,
            purchases: 15,
            totalRevenues: 750
        },
        {
            id: 4,
            name: 'Сергей',
            averageCheck: 5000,
            purchases: 2,
            totalRevenues: 10000
        },
        {
            id: 5,
            name: 'Иван',
            averageCheck: 700,
            purchases: 5,
            totalRevenues: 3500
        },
        {
            id: 6,
            name: 'Николай',
            averageCheck: 600,
            purchases: 10,
            totalRevenues: 6000
        },
        {
            id: 7,
            name: 'Евгения',
            averageCheck: 1500,
            purchases: 3,
            totalRevenues: 4500
        },
        {
            id: 8,
            name: 'Ирина',
            averageCheck: 6502,
            purchases: 12,
            totalRevenues: 78024
        },
        {
            id: 9,
            name: 'Александр',
            averageCheck: 54258,
            purchases: 1,
            totalRevenues: 54258
        },
        {
            id: 10,
            name: 'Сергей',
            averageCheck: 1234,
            purchases: 9,
            totalRevenues: 11106
        },
        {
            id: 11,
            name: 'Владлен',
            averageCheck: 1752,
            purchases: 7,
            totalRevenues: 12264
        },
        {
            id: 12,
            name: 'Борис',
            averageCheck: 45451,
            purchases: 1,
            totalRevenues: 45451
        },
        {
            id: 13,
            name: 'Богдан',
            averageCheck: 1000,
            purchases: 15,
            totalRevenues: 15000
        },
        {
            id: 14,
            name: 'Мария',
            averageCheck: 500,
            purchases: 7,
            totalRevenues: 3500
        },
        {
            id: 15,
            name: 'Максим',
            averageCheck: 700,
            purchases: 10,
            totalRevenues: 7000
        },
    ]
}

const buyersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return {
                ...state,
                buyers: [
                    ...state.buyers.sort((a, b) => {
                        if (action.payload.boolean) {
                            return b[action.payload.value] - a[action.payload.value]
                        }
                        return a[action.payload.value] - b[action.payload.value]
                    })
                ]
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}

export default buyersReducer;
