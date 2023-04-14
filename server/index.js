const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));

// endpoints here
app.get('/increment', (req, res) => {
  // count++;
  res.json({ count: 12 });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});