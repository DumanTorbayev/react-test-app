import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TerminalForm = ({onAddTerminals}) => {
    const [terminalDescription, setTerminalDescription] = useState('');
    const [terminalName, setTerminalName] = useState('');

    const onSetDescriptionValue = (e) => {
        setTerminalDescription(e.target.value)
    }

    const onSetNameValue = (e) => {
        setTerminalName(e.target.value)
    }

    const handleSubmit = () => {
        onAddTerminals(terminalName, terminalDescription);
    }

    return (
        <Form className="w-100 mb-5 pb-5">
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Введите название терминала"
                    onChange={onSetNameValue}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control as="textarea" rows="3" placeholder="Введите описание терминала"
                              onChange={onSetDescriptionValue}/>
            </Form.Group>
            <Button block variant="primary" type="button" onClick={handleSubmit}>Добавить</Button>
        </Form>
    );
};

export default TerminalForm;
