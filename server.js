const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/guardar', (req, res) => {
  const data = req.body;
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.send({ status: 'ok' });
});

app.get('/datos', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  res.send(data);
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));