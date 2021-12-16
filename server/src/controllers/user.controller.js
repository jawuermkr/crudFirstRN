exports.searchAll = (req, res) => {
  req.getConnection((err, connection) => {
    connection.query("SELECT * FROM users", (err, result) => {
      console.log(
        err
          ? "Err SELECT * FROM users" + err
          : "SELECT * FROM users " + result.length + " resultados"
      );
      res.json(
        err
          ? { msgErr: "Ocurrió un error al consultar los datos" }
          : { msgResults: result.length + " resultados", rows: result }
      );
    });
  });
};

exports.create = (req, res) => {
  req.getConnection((err, connection) => {
    connection.query("INSERT INTO users SET ?", [req.body], (err, result) => {
      console.log(err ? "Error INSERT INTO users " + err : "User add..");
      res.json(
        err
          ? { msgErr: "Ocurrió un error" }
          : { msgResults: "Usuario registrado exitosamente" }
      );
    });
  });
};
