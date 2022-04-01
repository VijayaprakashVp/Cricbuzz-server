const app = require("./index");
require("dotenv").config();

const connect = require("./configs/db");

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening to the port 8080");
  } catch (e) {
    console.log(e.message);
  }
});
