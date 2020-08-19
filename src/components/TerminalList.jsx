import React from 'react';
import Button from "react-bootstrap/Button";

const TerminalList = ({name, description, index, deleteItem}) => {
   return (
      <>
         <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
               <Button variant="danger" onClick={() => deleteItem(index) }>Удалить</Button>
            </td>
         </tr>
      </>
   );
};

export default TerminalList;
