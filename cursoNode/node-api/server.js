const express = require('express');

const app = express();
app.listen(3001);

app.get('/', (req, res) => {
    return res.json({
        msg: 'Olá',
        m: 'Mundo'
    });
})