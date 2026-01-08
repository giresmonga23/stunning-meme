import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Servir le frontend
app.use(express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Exemple d’API simple (analyse)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello Visifoot!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
