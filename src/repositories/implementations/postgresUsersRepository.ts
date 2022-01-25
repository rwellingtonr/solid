import { User } from "../../entities/user"
import { IUserRepository } from "../IUserRepository"

export class PostgresUserRepository implements IUserRepository {
	private user: User[] = []

	async findByEmail(email: string): Promise<User> {
		const user = this.user.find((user) => user.email === email)
		return user
	}

	async save(user: User): Promise<void> {
		this.user.push(user)
	}
}
