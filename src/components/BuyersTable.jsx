import React from 'react';
import {Link} from "react-router-dom";

const BuyersTable = ({id, name, averageCheck, purchases, totalRevenues}) => {
    return (
        <tr>
            <td>
                <Link to={`/buyers/${id}`}>
                    {id}
                </Link>
            </td>
            <td>{name}</td>
            <td>{averageCheck}</td>
            <td>{purchases}</td>
            <td>{totalRevenues}</td>
        </tr>
    );
};

export default BuyersTable;