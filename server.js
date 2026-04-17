const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: 'db',
  user: 'wallet_user',
  password: 'wallet_pass',
  database: 'wallet_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release();
});

app.get('/', (req, res) => {
  res.send('Cloud Wallet API is running');
});

app.post('/users', (req, res) => {
  const { name, email, balance } = req.body;
  const sql = 'INSERT INTO users (name, email, balance) VALUES (?, ?, ?)';
  db.query(sql, [name, email, balance || 0], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User created successfully', userId: result.insertId });
  });
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/deposit/:id', (req, res) => {
  const { amount } = req.body;
  const sql = 'UPDATE users SET balance = balance + ? WHERE id = ?';
  db.query(sql, [amount, req.params.id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Deposit successful' });
  });
});

app.post('/withdraw/:id', (req, res) => {
  const { amount } = req.body;

  const checkSql = 'SELECT balance FROM users WHERE id = ?';
  db.query(checkSql, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const currentBalance = Number(results[0].balance);

    if (currentBalance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    const updateSql = 'UPDATE users SET balance = balance - ? WHERE id = ?';
    db.query(updateSql, [amount, req.params.id], (err2) => {
      if (err2) {
        return res.status(500).json({ error: err2.message });
      }
      res.json({ message: 'Withdrawal successful' });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});