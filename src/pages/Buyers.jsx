import React, {useReducer, useState} from 'react';
import {BuyersList} from "../components";
import buyersReducer, {initialState} from "../reducers/buyers";
import {setSortByAverageCheck, setSortByPurchases, setSortByTotalRevenues} from "../actions/buyers";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";

const Buyers = () => {
    const [state, dispatch] = useReducer(buyersReducer, initialState)
    const [nameFilter, setNameFilter] = useState('');
    const {buyers} = state;

    const filteredNames = buyers.filter((obj) => {
        let flag = false;
        Object.values(obj).forEach((val) => {
            if (String(val).toLowerCase().indexOf(nameFilter.toLowerCase()) > -1) {
                flag = true;
            }
        });
        if (flag) return obj;
    });

    return (
        <>
            <Table striped bordered hover variant="dark" responsive='md' className='mb-0'>
                <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>
                        <div className="mb-2">Имя покупателя</div>
                        <FormControl onChange={e => setNameFilter(e.target.value)} size="sm" type="text"/>
                    </th>
                    <th>
                        <div className="mb-2">Средний чек</div>
                        <Button onClick={() => dispatch(setSortByAverageCheck())} variant='info' size='sm'>
                            сортировать
                        </Button>
                    </th>
                    <th>
                        <div className="mb-2">Количество покупок</div>
                        <Button onClick={() => dispatch(setSortByPurchases())} variant='info' size='sm'>
                            сортировать
                        </Button>
                    </th>
                    <th>
                        <div className="mb-2">Общая выручка</div>
                        <Button onClick={() => dispatch(setSortByTotalRevenues())} variant='info' size='sm'>
                            сортировать
                        </Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredNames.map(data => <BuyersList key={data.id} {...data}/>)}
                </tbody>
            </Table>
        </>
    );
};

export default Buyers;
