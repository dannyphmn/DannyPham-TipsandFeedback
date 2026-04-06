const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Import modular routers
const tipsRouter = require('./routes/tips');
const feedbackRouter = require('./routes/feedback');
const diagnosticsRouter = require('./routes/diagnostics');

// Import custom logging middleware
const { clog } = require('./middleware/clog');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clog);

// Serve static files from 'public'
app.use(express.static('public'));

// API Routes
app.use('/api/tips', tipsRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/diagnostics', diagnosticsRouter);

// Wildcard route for 404 page
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;