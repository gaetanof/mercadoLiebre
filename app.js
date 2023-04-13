const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));


app.get('/',(req, res) => {
    let homeHTMLPath = path.join(__dirname,'./home.html')
    res.sendFile(homeHTMLPath);
});

app.listen(3000,() => {console.log("Servidor escuchando puerto 3000")});

