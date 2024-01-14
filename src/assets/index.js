const express = im('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your routes and other middleware can be defined below

app.get('/example', (req, res) => {
  res.json({ message: 'Hello, CORS is enabled!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
