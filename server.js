const express = require('express');
const cors = require('cors'); // <--- INI HARUS ADA
const app = express();

app.use(cors()); // <--- INI JUGA

app.get('/estimasi', (req, res) => {
    // ... logic lu ...
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server up!'));
