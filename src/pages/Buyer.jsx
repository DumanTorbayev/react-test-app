import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import Table from "react-bootstrap/Table";

const Buyer = ({buyerData}) => {
    const {buyerId} = useParams();
    const buyers = useContext(buyerData)

    const currentBuyer = buyers.filter(id => {
        return id.id === +buyerId
    });

    return (
        <>
            <Link to='/buyers'>
                <button type='button' className='btn btn-primary my-2'>назад</button>
            </Link>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>Имя покупателя</th>
                    <th>Средний чек</th>
                    <th>Количество покупок</th>
                    <th>Общая выручка</th>
                </tr>
                </thead>
                <tbody>

                {
                    currentBuyer.map(data =>
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.averageCheck}</td>
                            <td>{data.purchases}</td>
                            <td>{data.totalRevenues}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </>
    );
};

export default Buyer;
