import React, {useContext, useEffect, useReducer, useState} from 'react';
import BuyersTable from "../components/BuyersTable";
import buyersReducer, {initialState} from "../reducers/buyers";
import Table from "react-bootstrap/Table";
import {setFilterByName} from "../actions/buyers";
import useDebounce from "../use-debounce";

const Buyers = ({buyersData, filtersByName}) => {
    //const [state, dispatch] = useReducer(buyersReducer, initialState);
    const [nameFilter, setNameFilter] = useState('');
    const [sort, setSort] = useState(false);
    const debounceNameFilter = useDebounce(nameFilter, 1000);
    const buyers = useContext(buyersData)
    //const {buyers} = state;

    useEffect(() => {
        if (debounceNameFilter) {
            filtersByName(nameFilter)
            //dispatch(setFilterByName(nameFilter));
        }
    }, [debounceNameFilter])

     const buyersSortByAverageCheck = buyers.sort((a,b) => {
         return b.averageCheck - a.averageCheck
     })

    const handleSort = () => {
        setSort(!sort)
        console.log(sort);
    }

    const buyersFilterByName = (e) => {
        setNameFilter(e.target.value)
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>
                        <div className="mb-2">Имя покупателя</div>
                        <input onChange={buyersFilterByName} type="text"/>
                    </th>
                    <th>
                        <div className="mb-2">Средний чек</div>
                        <button onClick={handleSort} className='btn btn-info'>сортировать</button>
                    </th>
                    <th>Количество покупок</th>
                    <th>Общая выручка</th>
                </tr>
                </thead>
                <tbody>
                {!sort
                    ? buyersSortByAverageCheck.map(data => <BuyersTable key={data.id} {...data}/>)
                    : buyers.map(data => <BuyersTable key={data.id} {...data}/>)
                }
                </tbody>
            </Table>
        </>
    );
};

export default Buyers;
