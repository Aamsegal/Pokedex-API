const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, 
`Ground`, `Ice`, `Normal`, `Poison`, `Psychich`, `Rock`, `Steel`, `Water`]

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req,res) => {
    res.send('Hello, world!')
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server listening to https://localhost:${PORT}`)
});