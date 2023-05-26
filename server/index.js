const express = require("express");
const serverlessExpress = require("@vendia/serverless-express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "*" }));

app.get("/api/home", (req, res) => {
  res.send({ data: "Hello from Home!" });
});

app.get("/api/portfolio", (req, res) => {
  res.send({ data: "Hello from Portfolio!" });
});

app.get("/api/contact", (req, res) => {
  res.send({ data: "Hello from Contact!" });
});

if (process.env.NODE_ENV === "development") {
  const port = 3001;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} else {
  exports.handler = serverlessExpress({ app });
}
