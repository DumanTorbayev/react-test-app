import React, {useReducer} from 'react';
import terminal, {initialState} from "../reducers/terminals";
import {handleDeleteItem, setTerminalData} from "../actions/terminals";
import Table from "react-bootstrap/Table";
import {TerminalForm, TerminalList} from '../components'

const Terminals = () => {
    const [state, dispatch] = useReducer(terminal, initialState);
    const {items} = state;

    const onAddTerminals = (name, description) => {
        if(name !== '' && description !== '') {
            dispatch(setTerminalData(name, description))
        }
    }

    const deleteItem = (index) => {
        dispatch(handleDeleteItem(index))
    }

    return (
        <div className="d-flex flex-column">
            <TerminalForm onAddTerminals={onAddTerminals}/>
            <Table striped bordered variant="dark" responsive='md'>
                <thead>
                <tr>
                    <th>Название терминала</th>
                    <th>Описание терминала</th>
                </tr>
                </thead>
                <tbody>
                {items.map((data, index) => (
                    <TerminalList key={data.id} {...data} index={index} deleteItem={deleteItem}/>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Terminals;
