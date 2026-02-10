const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from backend' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
