const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

// Create Order
app.post('/create-order', (req, res) => {
  const { uid, product, trx } = req.body;

  const order = {
    id: uuidv4(),
    uid,
    product,
    trx,
    status: 'pending'
  };

  orders.push(order);
  res.json(order);
});

// Get Orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
