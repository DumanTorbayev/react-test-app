import React, {useReducer, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import terminal, {initialState} from "../reducers/terminals";
import {handleDeleteItem, setTerminalData} from "../actions/terminals";
import TerminalList from "../components/TerminalList";
import Table from "react-bootstrap/Table";

const Terminals = () => {
   const [state, dispatch] = useReducer(terminal, initialState);
   const [terminalDescription, setTerminalDecription] = useState('');
   const [terminalName, setTerminalName] = useState('');
   const {items} = state;

   const onSetDescriptionValue = (e) => {
      setTerminalDecription(e.target.value)
   }

   const onSetNameValue = (e) => {
      setTerminalName(e.target.value)
   }

   const addTerminals = () => {
      dispatch(setTerminalData(terminalName, terminalDescription))
   }

   const deleteItem = (index) => {
      dispatch(handleDeleteItem(index))
      console.log(index);
   }

   return (
      <div className="d-flex flex-column">
         <Form className="w-100 mb-5 pb-5">
            <Form.Group>
               <input
                  className="form-control"
                  type="text"
                  placeholder="Введите название терминала"
                  onChange={onSetNameValue}
               />
            </Form.Group>
            <Form.Group>
               <textarea
                  className="form-control"
                  placeholder="Введите описание терминала"
                  onChange={onSetDescriptionValue}
               />
            </Form.Group>
            <Button className="w-100"
                    variant="primary"
                    type="button"
                    onClick={addTerminals}
            >
               Добавить
            </Button>
         </Form>

         <Table striped bordered hover>
            <thead>
            <tr>
               <th>Название терминала</th>
               <th>Описание терминала</th>
               <th></th>
            </tr>
            </thead>
            <tbody>
            {
               items.map((data, index) => (
                  <TerminalList key={data.id} {...data} index={index} deleteItem={deleteItem}/>
               ))
            }
            </tbody>
         </Table>
      </div>
   );
};

export default Terminals;
