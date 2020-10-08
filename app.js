const express = require('express');

const { port } = require('./config/port');

const app = express();

// routes
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1", require('./routes'));

app.listen(port, () => console.log(`server on!, Running at ${port}`));