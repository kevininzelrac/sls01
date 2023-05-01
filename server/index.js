const express = require("express");
const awsServerlessExpress = require("aws-serverless-express");

const app = express();
app.use(express.json());

/* const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/home", (req, res) => {
  res.send("Hello from Home!");
});

app.get("/api/portfolio", (req, res) => {
  res.send("Hello from Portfolio!");
});

module.exports = app;

exports.handler = (event, context) => {
  // Ajoutez une fonction d'entrée pour votre fonction Lambda
  const server = awsServerlessExpress.createServer(app); // Créez le serveur Express et passez l'objet event et le contexte
  awsServerlessExpress.proxy(server, event, context); // Démarrez le serveur Express
};

// Ajoutez des configurations pour l'environnement de développement ou de production
if (process.env.NODE_ENV === "dev") {
  // Exécutez l'application en mode de développement
  const port = 3001;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} else {
  // Exportez la fonction Lambda
  module.exports.handler = (event, context) => {
    // Créez le serveur Express et passez l'objet event et le contexte
    const server = awsServerlessExpress.createServer(app);
    // Démarrez le serveur Express
    awsServerlessExpress.proxy(server, event, context);
  };
}
