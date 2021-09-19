const express = require('express');
const indexRouter = require('./routes/api/index');
const { version, prefix } = require('./config');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(`${prefix}/${version}`, indexRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
