const express = require('express');

const app = express();

app.use(express.static('publics'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(process.env.PORT || 3000, () => console.log('Server Started !!!'));