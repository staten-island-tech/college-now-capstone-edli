const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
mongoose
  .connect(
    `mongodb+srv://jlinl16:508QIVMOvCxAOnuJ@cluster0.dt3gyit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});

