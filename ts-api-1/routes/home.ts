import express from "express"


export default (app: express.Application) => {

  app.get('/', (req, res) => {
    res.json({
      'foo': 'routes/home içindeki route'
    })
  })
}
