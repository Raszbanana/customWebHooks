import express from 'express';

const app = express();

app.use(express.json())

app.post('/ping-me', (req, res) => {
  console.log(req.body);
});

app.post('/test-baby', (req, res) => {
  console.log(req.body);
});

app.post('/pawel', (req, res) => {
  console.log(req.body);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})