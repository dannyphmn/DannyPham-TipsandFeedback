const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const path = require('path');

// File path to the diagnostics JSON
const diagnosticsPath = path.join(__dirname, '../db/diagnostics.json');

// GET Route: return all diagnostic entries
diagnostics.get('/', (req, res) => {
  readFromFile(diagnosticsPath)
    .then((data) => {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    })
    .catch((err) => {
      console.error('Error reading diagnostics:', err);
      res.status(500).json({ error: 'Failed to read diagnostics' });
    });
});

// POST Route: log a new error entry
diagnostics.post('/', (req, res) => {
  const { errors, timestamp } = req.body;

  if (!errors || !timestamp) {
    return res.status(400).json({ error: 'Invalid diagnostics data' });
  }

  const newEntry = {
    error_id: uuidv4(),
    time: new Date(timestamp).getTime(),
    errors,
  };

  readAndAppend(newEntry, diagnosticsPath);

  res.json({ status: 'Diagnostics logged', entry: newEntry });
});

module.exports = diagnostics;