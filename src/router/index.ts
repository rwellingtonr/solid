import { Router } from "express"
import { createUserController } from "../useCases/createUser/createUserController"

const router = Router()

router.post("/user", new createUserController().handle)

export { router }
