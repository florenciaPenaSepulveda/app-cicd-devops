const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta inicial requerida por la prueba
app.get('/', (req, res) => {
  res.send('¡Hola CI/CD! Primera versión desplegada desde GitHub');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
