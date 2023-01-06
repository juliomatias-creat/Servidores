const express = require('express');

const app = express();

// localhost:3000/
app.get('/', (req, res) => {
    
    res.send('Julio Matias');
});

app.listen(3000); 