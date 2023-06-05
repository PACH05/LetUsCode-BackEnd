const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 6699;

require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json("Server running");
});

var whitelist = JSON.parse(process.env.LIST_VAR);
var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});