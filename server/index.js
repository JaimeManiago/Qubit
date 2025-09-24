
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
  try {
    res.status(200).json({
      console: 'skibidibidootdootdoo',
      success: true,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({
      error: 'Internal server error',
      success: false
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});