import express from "express"

const rootRouter = new express.Router()

// if (req.verb === GET && req.path === "/")
rootRouter.get('/', (req, res) => {
  res.send('Hola from the backend')
})

rootRouter.get("/magical-creatures", (req, res) => {
  res.send("This is a list of magical creatures: dragon, unicorn, phoenix")
})



// rootRouter.get('/podcasts', (req, res) => {
//   let podcasts = [
//     'The Daily',
//     'MBMBAM',
//     'Armchair Expert',
//     'This American Life',
//     'The Besties',
//   ]

//   res.render('podcast-index', { podcasts: podcasts })
// })

// rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter




