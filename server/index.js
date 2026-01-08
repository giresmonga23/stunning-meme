const express = require('express');
const cors = require('cors');
const analyzeRoutes = require('./routes/analyze');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/analyze', analyzeRoutes);

app.get('/', (req, res) => res.send('FootBrain API online'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
