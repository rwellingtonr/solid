interface IAddress {
	email: string
	name: string
}

export interface IMessage {
	to: IAddress
	from: IAddress
	subject: string
	body: string
}

export interface IMailProvider {
	sendMails(message: IMessage): Promise<void>
}
