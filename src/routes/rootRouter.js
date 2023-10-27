import express from "express"

const rootRouter = new express.Router()

rootRouter.get('/', (req, res) => {
  res.send('Hello from the backend')
})

rootRouter.get("/magical-creatures", (req, res) => {
  res.send("This is a list of magical creatures: dragon, unicorn, phoenix")
})

export default rootRouter
