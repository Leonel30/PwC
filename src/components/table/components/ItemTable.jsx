import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const ItemTable = ({ id, name, date, address, phone }) => {
  const { removeUser } = useContext(UserContext);
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{date}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <button
          onClick={() => removeUser(phone)}
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
