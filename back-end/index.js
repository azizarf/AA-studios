const express = require("express");
require("./database/index");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors())

app.use("/api/users", require("./routers/user.Router"));
app.use("/api/equipment", require("./routers/equipment.Router"));
app.use("/api/prod", require("./routers/prod.Router"));
app.use("/api/studio", require("./routers/studio.Router"));





const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});