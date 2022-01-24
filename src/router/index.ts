import { Router } from "express"
import { userController } from "../controller"

const router = Router()

router.post("/user", new userController().handle)

export { router }
