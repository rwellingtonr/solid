import { User } from "../../entities/user"
import { IMailProvider } from "../../providers/IMailProvider"
import { IUserRepository } from "../../repositories/IUserRepository"
import { CreateUserDTO } from "./createUserDto"

export class CreateUserUseCase {
	constructor(private usersRepository: IUserRepository, private mailProvider: IMailProvider) {}

	async execute(data: CreateUserDTO) {
		const alreadyExists = await this.usersRepository.findByEmail(data.email)
		if (alreadyExists) {
			throw new Error("User already exists!")
		}
		const user = new User(data)
		await this.usersRepository.save(user)

		await this.mailProvider.sendMails({
			to: {
				name: data.name,
				email: data.email,
			},
			from: {
				name: "App mail team",
				email: "blabla@bla.com",
			},
			subject: "You are welcome",
			body: "<p>You can access your account</p>",
		})
	}
}
