const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route GET sederhana
app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API Express di Vercel berhasil berjalan!',
    timestamp: new Date()
  });
});

// Route POST untuk menerima data
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: 'fail',
      message: 'Nama dan email wajib diisi!'
    });
  }

  res.status(201).json({
    status: 'success',
    message: 'User berhasil dibuat',
    data: { name, email }
  });
});

// Export handler agar Vercel bisa menjalankannya secara serverless
module.exports = app;
