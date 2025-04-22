const express = require('express')
const multer = require('multer');
const app = express()
const PORT = 3003
const upload = multer()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Prueba de servidor')
})

app.get('/saludo', (req, res) => {
    res.send('jaja saludos')
})

app.post('/prueba',upload.none(), (req, res) => {
     
    res.send(req.body)
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

