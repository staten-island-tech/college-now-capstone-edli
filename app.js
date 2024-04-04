const express = require("express"); //this file requires express
const port = process.env.PORT || 9999; //use external server port or local 3000 
const cors = require("cors");
const app = express(); //instanitate express
require("./DB/mongoose"); //ensures mongoose connects and runs

let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
const routes = require("./Routes/index");

//takes the raw requersts and turn them into usable properiteis on req.body
app.use(express.json());
app.use(express.urlencoded());


app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});