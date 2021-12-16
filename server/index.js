const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const connection = require("express-myconnection");

const app = express();

// Asignar puerto
app.set("port", process.env.PORT || 9000);
app.listen(app.get("port"), () =>
  console.log("Servidor en el puerto", app.get("port"))
);

// Conectar a la base de datos
app.use(
  connection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "Asiste.2021",
      database: "prueba",
    },
    "single"
  )
);

//para manipular transacciones de tipo json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar cors
app.use(
  cors({
    origin: "host://localhost:",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credential: true,
    origin: true,
  })
);

//Asignar routes
app.use("/users", require("./src/routes/user.route"));
