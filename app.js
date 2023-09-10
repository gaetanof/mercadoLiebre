const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    let homeHTMLPath = path.join(__dirname, './views/home.html')
    res.sendFile(homeHTMLPath);
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.listen(PORT, () => { console.log(`servidor escuchando puerto ${PORT}`) });

