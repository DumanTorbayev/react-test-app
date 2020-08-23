import React, {useReducer} from 'react';
import terminal, {initialState} from "../reducers/terminals";
import {handleDeleteItem, setTerminalData} from "../actions/terminals";
import {TerminalForm, TerminalTable} from '../components'

const Terminals = () => {
    const [state, dispatch] = useReducer(terminal, initialState);

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
            <TerminalTable deleteItem={deleteItem} {...state} />
        </div>
    );
};

export default Terminals;
