const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist_error'))

app.get('/version', (req, res) => {
  res.send('22 - Should not work') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  res.send('ok')
})

// App started in wrong port, to make it unfunctional
app.listen(PORT + 1, () => {
  /* eslint-disable-next-line no-console*/
  console.log(`server started on port ${PORT}`)
})
