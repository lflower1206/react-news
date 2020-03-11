import env from 'dotenv'
import express from 'express'
import fetch from 'node-fetch'

env.config()
const app = express()
const port = 8080 // default port to listen

app.get('/*', (_req, res) => {
  fetch(`${process.env.PROXY_TO}${_req.url}`)
    .then(resp => resp.json())
    .then(json => {
      res.send(json)
    })
    .catch(error => {
      console.error(error)
    })
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
