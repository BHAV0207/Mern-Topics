const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2
})

// in this we can add rate limiting to all the routes
// app.use(apiLimiter);

// in this we can add rate limiting to specific routes
app.use('/api/', apiLimiter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/', (req, res) => {
  res.send('Hello World from API');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

