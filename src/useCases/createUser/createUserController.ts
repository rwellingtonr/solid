/* What this Controller does... */
import { Request, Response } from "express"
import { createUserUseCase } from "./createUserUseCase"

class createUserController {
	constructor(private createUserUseCase: createUserUseCase) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { name, email, password } = req.body

			await this.createUserUseCase.execute({ name, email, password })

			return res.status(201).json({ result: "Created" })
		} catch (error) {
			return res.status(400).json({ error: error.message || "Unexpected error." })
		}
	}
}
export { createUserController }
