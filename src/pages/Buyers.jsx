import React, {useReducer} from 'react';
import BuyersTable from "../components/BuyersTable";
import buyersReducer, {initialState} from "../reducers/buyers";
import Table from "react-bootstrap/Table";
import {setFilterByName} from "../actions/buyers";

const Buyers = () => {
    const [state, dispatch] = useReducer(buyersReducer, initialState)
    const {buyers} = state;
    console.log(buyers);

   /* const buyersSortByName = buyers.sort((a,b) => {
        return b.averageCheck - a.averageCheck
    })*/

    const buyersFilterByName = (e) => {
        const buyersSort = buyers.filter(name => {
            return name.name === e.target.value
        })
        dispatch(setFilterByName(buyersSort));
        console.log(buyersSort);
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>
                        <div className="mb-2">Имя покупателя</div>
                        <input onChange={buyersFilterByName} type="text" />
                    </th>
                    <th>Средний чек</th>
                    <th>Количество покупок</th>
                    <th>Общая выручка</th>
                </tr>
                </thead>
                <tbody>
                {
                    buyers.map(data => <BuyersTable key={data.id} {...data}/>)
                }
                </tbody>
            </Table>
        </>
    );
};

export default Buyers;
