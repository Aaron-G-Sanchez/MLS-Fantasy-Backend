const app = require('')
const { db } = require('./db/db')
const port = 3000

app.listen(port, () => {
  db.sync()
  console.log(`Listening at https://localhost:${port}`)
})
