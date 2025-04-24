const http = require('http');
const pageData = require('./data.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${pageData.title}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2rem; background-color: #f0f0f0; }
        h1 { color: #b71c1c; }
        h2 { color: #333; }
        p { font-size: 1.1rem; line-height: 1.6; }
        ul { list-style-type: square; }
      </style>
    </head>
    <body>
      <h1>${pageData.title}</h1>
      <h2>${pageData.subtitle}</h2>
      <p>${pageData.description}</p>
      <p><strong>Director:</strong> ${pageData.director}</p>
      <p><strong>Año de estreno:</strong> ${pageData.releaseYear}</p>
      <p><strong>Género:</strong> ${pageData.genre}</p>
      <p><strong>Personajes principales:</strong></p>
      <ul>
        ${pageData.mainCharacters.map(char => `<li>${char}</li>`).join('')}
      </ul>
      <p><em>${pageData.famousQuote}</em></p>
      <p><strong>Música por:</strong> ${pageData.soundtrackBy}</p>
    </body>
    </html>
  `;

  res.end(htmlContent);
});



server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});