import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const BuyersTable = ({buyers, pageSize, currentPage, onSortAsc, onSortDesc}) => {
    const [nameFilter, setNameFilter] = useState('');

    const filteredNames = buyers.filter((obj) => {
        let flag = false;
        Object.values(obj).forEach((val) => {
            if (String(val).toLowerCase().indexOf(nameFilter.toLowerCase()) > -1) {
                flag = true;
            }
        });
        if (flag) return obj;
    });

    const startElement = pageSize * currentPage - pageSize;
    const endElement = pageSize * currentPage;

    return (
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
                    <div className='d-flex justify-content-center'>
                        <Button onClick={() => onSortDesc('averageCheck')} variant='primary' size='sm'
                                className='d-flex mx-1'>
                            <span className='arrow arrow-desc'></span>
                        </Button>
                        <Button onClick={() => onSortAsc('averageCheck')} variant='primary' size='sm'
                                className='d-flex mx-1'>
                            <span className='arrow arrow-asc'></span>
                        </Button>
                    </div>
                </th>
                <th>
                    <div className="mb-2">Количество покупок</div>
                    <div className='d-flex justify-content-center'>
                        <Button onClick={() => onSortDesc('purchases')} variant='primary' size='sm'
                                className='d-flex mx-1'>
                            <span className='arrow arrow-desc'></span>
                        </Button>
                        <Button onClick={() => onSortAsc('purchases')} variant='primary' size='sm'
                                className='d-flex mx-1'>
                            <span className='arrow arrow-asc'></span>
                        </Button>
                    </div>
                </th>
                <th>
                    <div className="mb-2">Общая выручка</div>
                    <div className='d-flex justify-content-center'>
                        <Button onClick={() => onSortDesc('totalRevenues')} variant='primary' size='sm'
                                className='d-flex mx-1'>
                            <span className='arrow arrow-desc'></span>
                        </Button>
                        <Button onClick={() => onSortAsc('totalRevenues')} variant='primary' size='sm'
                                className='d-flex mx-1'>
                            <span className='arrow arrow-asc'></span>
                        </Button>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            {filteredNames.slice(startElement, endElement).map(data =>
                <tr key={data.id}>
                    <td><Link to={`/buyers/${data.id}`}>{data.id}</Link></td>
                    <td>{data.name}</td>
                    <td>{data.averageCheck}</td>
                    <td>{data.purchases}</td>
                    <td>{data.totalRevenues}</td>
                </tr>
                )}
            </tbody>
        </Table>
    );
};

export default BuyersTable;
