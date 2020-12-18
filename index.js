const { exec, spawn } = require('child_process');

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => exec('node --version', (err, stdout, stderr) => res.send(stderr || stdout)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
