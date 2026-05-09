const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/total-vendido", (req, res) => {
  const sql = `
    SELECT SUM(valor_total) AS total_vendido
    FROM vendas
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

module.exports = router;