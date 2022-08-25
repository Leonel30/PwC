import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/Navbar/Navbar";
import { NoFound } from "../components/noFound/NoFound";
import { Register } from "../components/register/Register";
import { Table } from "../components/table/Table";
import { UserContext } from "../context/UserContext";

export const AppRouter = () => {
  const { isloggin } = useContext(UserContext);
  return (
    <>
      <NavBar />
      <Routes>
        {!isloggin && <Route path="/" element={<Register />} />}
        {isloggin && (
          <>
            <Route path="/table" element={<Table />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
        <Route path="/nofound" element={<NoFound />} />
        <Route path="/*" element={<Navigate to="/nofound" />} />
      </Routes>
      <Footer />
    </>
  );
};
