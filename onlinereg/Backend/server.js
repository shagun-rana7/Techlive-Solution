const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port
require('../Admin/Backend/dbcon/cn')
const router = require('../Admin/Backend/router/route');
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});
