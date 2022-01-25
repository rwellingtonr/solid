import express from "express"
import cors from "cors"
import { createServer } from "http"
import { router } from "./router"
import "dotenv/config"
// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(router)

/*Server with http method*/
const serverHttp = createServer(app)
export { serverHttp }
