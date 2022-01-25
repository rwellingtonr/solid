import { MailtrapMailProvider } from "../../providers/implementations/mailtrapMailProvider"
import { PostgresUserRepository } from "../../repositories/implementations/postgresUsersRepository"
import { CreateUserController } from "./createUserController"
import { CreateUserUseCase } from "./createUserUseCase"

const postgresUsersRepository = new PostgresUserRepository()
const mailtrapProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, mailtrapProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
