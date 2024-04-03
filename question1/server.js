const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});