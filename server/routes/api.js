const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send("Funky fresh API's coming soon!");
});

module.exports = router;
