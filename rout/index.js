const express = require('express');
const router = express.Router();
// const app = express();
router.get('/index', function (req, res) {
  res.send("Hey this is index");
}
)


module.exports =router;
