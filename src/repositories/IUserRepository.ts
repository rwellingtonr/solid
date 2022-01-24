import { User } from "../entities/user"

export interface IUserRepository {
	findByEmail(emial: string): Promise<User>
	save(user: User): Promise<void>
}
