const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Covidleads", {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
