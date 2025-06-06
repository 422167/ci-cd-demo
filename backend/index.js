const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
