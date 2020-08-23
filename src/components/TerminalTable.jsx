import React from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const TerminalTable = ({items, deleteItem}) => {
    return (
        <>
            <Table striped bordered variant="dark" responsive='md'>
                <thead>
                <tr>
                    <th>Название терминала</th>
                    <th>Описание терминала</th>
                </tr>
                </thead>
                <tbody>
                {items.map((data, index) => (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                        <td><Button block variant="danger" onClick={() => deleteItem(index)}>Удалить</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default TerminalTable;
