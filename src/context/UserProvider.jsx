import React from "react";
import { UserContext } from "./UserContext";
import { useState } from "react";
import { dataUser } from "../data/data";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(dataUser);
  const [isloggin, setIsloggin] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  const removeUser = (phone) => {
    const updateUser = users.filter((user) => user.phone !== phone);
    setUsers(updateUser);
  };
  const searchingUser = (userToFind) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(userToFind.toLowerCase())
    );
  };
  const lastNextPage = (cantUser) => {
    return users.filter((user) => user.name.toLowerCase().includes(cantUser))
      .length;
  };
  const logged = () => {
    setIsloggin((isloggin) => (isloggin = !isloggin));
  };
  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        searchingUser,
        lastNextPage,
        isloggin,
        logged,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
