import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { BarGraphic } from "./components/BarGraphic";
import { LinearGraphic } from "./components/LinearGraphic";

import "./dashboard.css";

export const Dashboard = () => {
  const { users } = useContext(UserContext);
  const [typeGra, setTypeGra] = useState("bar");
  const dataUser = users.map((user) => {
    return {
      x: user.name,
      y: user.date,
    };
  });

  const [dataUserGrap, setDataUserGrap] = useState({
    labels: users.map((user) => user.name),
    datasets: [
      {
        label: "",
        data: dataUser,
        backgroundColor: ["rgb(224 48 30 / 80% )"],
        borderColor: "rgb(224 48 30)",
      },
    ],
  });
  console.log(setDataUserGrap);
  return (
    <>
      <div className=" container_dashboard container col-12">
        <div className="container_panel_1">
          <div className="container_panel">
            <h5 class="">Total User Registered</h5>
            <h2 class="">
              <b>{users.length}</b>
            </h2>
            <Link to="/table" class="btn">
              Go to table
            </Link>
          </div>
        </div>
        <div className="container_grap">
          <h2> Date vs User Registered</h2>
          <div className="contianer_btn_gra">
            <button
              className={typeGra === "bar" ? "btn active_gra" : "btn"}
              onClick={() => setTypeGra("bar")}
            >
              Bar
            </button>
            <button
              className={typeGra === "line" ? "btn active_gra" : "btn"}
              onClick={() => setTypeGra("line")}
            >
              Line
            </button>
          </div>

          <div>
            {typeGra === "bar" && <BarGraphic chartData={dataUserGrap} />}
            {typeGra === "line" && <LinearGraphic chartData={dataUserGrap} />}
          </div>
        </div>
      </div>
    </>
  );
};
