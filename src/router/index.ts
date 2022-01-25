import { Router } from "express"
import { createUserController } from "../useCases/createUser"

const router = Router()

router.post("/user", (request, response) => createUserController.handle(request, response))

export { router }
