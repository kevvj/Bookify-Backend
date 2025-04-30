const express = require('express')
const multer = require('multer')
const fetch = require('node-fetch')
const app = express()
const PORT = process.env.PORT || 3003
const upload = multer()
const pdfParse = require('pdf-parse')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Prueba de servidor')
})

app.get('/saludo', (req, res) => {
    res.send('jaja saludos')
})

app.post('/prueba', upload.single('file'), async (req, res) => {

    try {
        if (!req.file) {
          return res.status(400).json({ error: 'No se envió ningún archivo' })
        }
    
        const fileBuffer = req.file.buffer
        const data = await pdfParse(fileBuffer)
    
        res.json({ texto: data.text })
      } catch (error) {
        console.error('Error al procesar PDF:', error)
        res.status(500).json({ error: 'Error al procesar el PDF' })
      }
})

app.post('/traslate', async (req, res) => {
  try {
    const { text, source = 'auto', target = 'en' } = req.body

    if (!text) {
      return res.status(400).json({ error: 'Texto requerido para traducir' })
    }

    const response = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source,
        target,
        format: 'text'
      })
    })

    const data = await response.json()

    if (data.error) {
      return res.status(500).json({ error: data.error })
    }

    res.json({ translate: data.translatedText })

  } catch (error) {
    console.error('Error al traducir:', error)
    res.status(500).json({ error: 'Error al traducir el texto' })
  }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

