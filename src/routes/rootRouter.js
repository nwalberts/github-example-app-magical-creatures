import express from "express"

const rootRouter = new express.Router()

// if (req.verb === GET && req.path === "/")
rootRouter.get('/', (req, res) => {
  res.send('Hello from the backend')
})


// rootRouter.get('/home', (req, res) => {
//   res.render('home')
// })


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




