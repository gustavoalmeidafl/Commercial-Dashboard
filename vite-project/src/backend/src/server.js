const express = require("express");
const cors = require("cors");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});