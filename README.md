# Bookify Backend

Servidor de apoyo para [Bookify](https://github.com/kevvj/Bookify), una app de lectura. Recibe un PDF (como archivo o como URL) y devuelve su texto para que la app lo muestre.

## Endpoints

| Método | Ruta | Qué hace |
|---|---|---|
| GET | `/` y `/saludo` | Revisa que el servidor responda |
| POST | `/prueba` | Recibe un PDF (`file`, multipart) y devuelve `{ texto }` |
| POST | `/pdfurl` | Descarga el PDF de `{ url }` y devuelve `{ texto }` |
| POST | `/traslate` | Esqueleto de traducción: por ahora devuelve el mismo texto |

## Tecnologías

Node.js, Express, Multer y pdf-parse.

## Correrlo

```sh
npm install
node index.js      # http://localhost:3003
```

## Estado

Proyecto académico, sin mantenimiento.
