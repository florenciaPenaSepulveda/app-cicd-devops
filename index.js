const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta inicial requerida por la prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde CI/CD con Azure App Service!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
