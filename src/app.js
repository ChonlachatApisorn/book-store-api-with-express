const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

const bookRouter = require('./routers/bookRouter')

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bookRouter)

app.get('/', (req, res) => {
  res.send("check your path");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
