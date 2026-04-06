const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog.js');
const apiRouter = require('./routes/index.js'); // tips, feedback, diagnostics routers

const PORT = process.env.PORT || 3001;

const app = express();

// Custom middleware to log requests
app.use(clog);

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve API routes
app.use('/api', apiRouter);

// Serve static files from 'public'
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// Wildcard route for 404 page
app.get('*', (req, res) =>
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'))
);

// Start server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = app;