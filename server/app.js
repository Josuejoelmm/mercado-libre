const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemsRouter = require('./routers/itemsRouter');

// Initialize APP
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use("/api", itemsRouter);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => console.log(`Listening on ${ port }`));
