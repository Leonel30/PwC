import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ItemTable } from "./components/ItemTable";
import "./table.css";

export const Table = () => {
  const { users, searchingUser, lastNextPage } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchUser, setSearchUser] = useState("");

  const userLimit = () => {
    if (searchUser.length === 0) {
      return users.slice(currentPage, currentPage + 5);
    } else {
      const userFound = searchingUser(searchUser);
      return userFound.slice(currentPage, currentPage + 5);
    }
  };
  const nextPage = () => {
    if (lastNextPage(searchUser) > currentPage + 5) {
      setCurrentPage(currentPage + 5);
    } else {
      return;
    }
  };
  const previewPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    } else {
      return;
    }
  };

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchUser(value);
    setCurrentPage(0);
  };

  console.log(searchUser);

  return (
    <>
      <div className="container col-6 container_table">
        <header>
          {" "}
          <h2>Registered Users Table</h2>
          <div style={{ width: "300px" }}>
            <input
              className="form-control"
              placeholder="Search Users by name"
              value={searchUser}
              onChange={handleSearch}
            />
          </div>
        </header>
        <table className="table table-striped">
          <thead>
            <tr className="title_table">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="title_table">
            {userLimit().map((user, idx) => {
              return (
                <ItemTable
                  key={idx}
                  id={users.indexOf(user) + 1}
                  name={user.name}
                  date={user.date}
                  address={user.address}
                  phone={user.phone}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container_btn_pages container col-6">
        <button
          className={currentPage === 0 ? "btn_table" : ""}
          onClick={previewPage}
        >
          Anterior
        </button>
        <button
          className={
            lastNextPage(searchUser) <= currentPage + 5 ? "btn_table" : ""
          }
          onClick={nextPage}
        >
          siguiente
        </button>
      </div>
    </>
  );
};
