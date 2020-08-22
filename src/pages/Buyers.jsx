import React, {useReducer} from 'react';
import {BuyersTable} from "../components";
import buyersReducer, {initialState} from "../reducers/buyers";
import {setCurrentPage, setPageSize, setSort} from "../actions/buyers";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-js-pagination";

const pageSizes = [5, 10, 15];

const Buyers = () => {
    const [state, dispatch] = useReducer(buyersReducer, initialState)
    const {buyers, pageSize, currentPage} = state;

    const onSelectItem = (value) => {
        dispatch(setPageSize(value));
        dispatch(setCurrentPage(1))
    }

    const handlePaginationClick = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
    }

    const onSortDesc = (value) => {
        dispatch(setSort({value, boolean: false}));
    }

    const onSortAsc = (value) => {
        dispatch(setSort({value, boolean: true}));
    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-end mb-4'>
                <span className='mr-3'>Показать:</span>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">{pageSize}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {pageSizes.map((item, index) =>
                            <Dropdown.Item key={`${item}_${index}`} onClick={() => onSelectItem(item)}>
                                {item}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <BuyersTable {...state} onSortDesc={onSortDesc} onSortAsc={onSortAsc} />
            {pageSize <= 10
                ? <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={buyers.length}
                    onChange={handlePaginationClick}
                />
                : null
            }
        </>
    );
};

export default Buyers;
