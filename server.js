const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to LeetCode Clone!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
