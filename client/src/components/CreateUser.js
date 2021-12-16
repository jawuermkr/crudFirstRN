import React, { useState, useEffect, Redirect, Fragment } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const CreateUser = ({setStatusFrom, searchAllUsers, setStatusTable}) => {
  const [id_user, setid_user] = useState("");
  const [nombre, setnombre] = useState("");
  const [pass, setpass] = useState("");
  const [ciudad, setciudad] = useState("");

  const submitGuardar = async (e) => {
    try {
      e.preventDefault();
      e.target.reset();
      var res = await axios.post(`http://localhost:9000/users/create`, {
        id_user: id_user,
        nombre: nombre,
        pass: pass,
        ciudad: ciudad
      });
      Swal.fire({
        icon: res.data.msgErr ? 'error' : 'success',
        title: res.data.msgErr ? res.data.msgErr : res.data.msgResult,
        showConfirmButton: false,
        timer: 1500
      })
      if (!res.data.msgErr) {
        searchAllUsers();
        setStatusFrom(false);
        setStatusTable(true);
      }

    } catch (err) {
      console.log('Err', err);
    }
  }
  return (
    <Fragment>
      <form onSubmit={submitGuardar}>
        <div className="mb-3">
          <label htmlFor="cc" className="form-label">
            CC
          </label>
          <input
            type="number"
            value={id_user}
            onChange={(e) => setid_user(e.target.value)}
            className="form-control"
            id="cc"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            className="form-control"
            id="pass"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Ciudad
          </label>
          <input
            type="text"
            value={ciudad}
            onChange={(e) => setciudad(e.target.value)}
            className="form-control"
            id="city"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </Fragment>
  );
};

export default CreateUser;
