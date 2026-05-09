const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2005200533a#",
  database: "commercial_dashboard"
});

module.exports = connection;