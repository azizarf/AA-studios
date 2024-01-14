const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")




const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});