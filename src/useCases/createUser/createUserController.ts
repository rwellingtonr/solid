/* What this Controller does... */
import { Request, Response } from "express"
import { CreateUserUseCase } from "./createUserUseCase"

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

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
