import React, { useState, useEffect, Redirect, Fragment } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import CreateUser from "../components/CreateUser";
import TableUser from "../components/TableUser";

const User = () => {
  const [users, setUsers] = useState([]);
  const [statusForm, setStatusFrom] = useState(false);
  const [statusTable, setStatusTable] = useState(false);

  const searchAllUsers = async () => {
    try {
      let res = await axios.get(`http://localhost:9000/users/searchAll`);
      if (res.data.msgErr) {
        alert(res.data.msgErr);
      } else {
        setUsers(res.data.rows);
        Swal.fire({
          position: "top-end",
          icon: "success",
          toast: true,
          title: res.data.msgResults,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (err) {
      console.error("ocurrió un err: " + err);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <button
          type="btn"
          className="btn btn-success"
          onClick={() => {
            setStatusFrom(!statusForm);
            setStatusTable(false)
          }}
        >
          Crear Usuarios
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            searchAllUsers();
            setStatusFrom(false);
            setStatusTable(true);
          }}
        >
          Buscar Usuarios
        </button>
        {statusTable && <TableUser users={users} />}
        {statusForm && <CreateUser setStatusFrom={setStatusFrom} searchAllUsers={searchAllUsers} setStatusTable={setStatusTable} />}
      </div>
    </Fragment>
  );
};

export default User;
