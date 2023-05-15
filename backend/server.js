const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) {
        console.error(err)
    }
  });
  console.log(`Server is running on port: ${port}`);
});

// const express = require("express")
// const app = express()
// const cors = require("cors")
// const questions = require("./api/questions.route.js")

// app.use(cors())
// app.use(express.json())

// app.use("/api/v1/questions", questions)
// app.use("*", (req, res) => res.status(404).json({error: "page not found"}))

// module.exports = app
