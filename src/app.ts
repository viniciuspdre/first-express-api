import express from 'express'
import router from './routes/routes'
import cors from 'cors'


export function createApp() {
  const app = express()

  app.use(express.json())
  app.use("/", router)


  const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
  app.use(cors(corsOptions))

  return app
}
