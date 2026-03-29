const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname), {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.mp3')) {
      res.set('Content-Type', 'audio/mpeg');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'afirmacoes_subliminares.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
