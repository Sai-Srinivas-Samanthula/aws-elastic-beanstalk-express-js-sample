const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Checking how the commit works | Now It the final review stage of cd pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
