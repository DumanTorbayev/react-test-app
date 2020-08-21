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
      <div className='d-flex flex-column'>
         <Link to='/buyers' className='align-self-end my-2 btn btn-primary'>Назад</Link>
         <Table striped bordered hover variant="dark" responsive='md'>
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
            {currentBuyer.map(data =>
               <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.averageCheck}</td>
                  <td>{data.purchases}</td>
                  <td>{data.totalRevenues}</td>
               </tr>
            )}
            </tbody>
         </Table>
      </div>
   );
};

export default Buyer;
