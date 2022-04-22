const { urlencoded } = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//setting URL encoded and json
app.use(urlencoded({extended: true}));
app.use(express.json());
//static folder
app.use(express.static('public'));
//routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });