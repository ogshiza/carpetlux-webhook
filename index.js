const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 10000;

app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).send('No message');

  console.log('Received message:', message);

  // Здесь можно вставить запрос к OpenAI, если подключишь API

  res.json({ response: `Salut! Ai spus: ${message}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
