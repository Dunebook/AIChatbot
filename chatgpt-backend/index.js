const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatGptController = require('./chatGpt.controller');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/chatbot', chatGptController.askToChatGpt);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});