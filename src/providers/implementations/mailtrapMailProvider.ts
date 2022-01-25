import { IMailProvider, IMessage } from "../IMailProvider"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const { HOST, PORT, USER, PASSWORD } = process.env

export class MailtrapMailProvider implements IMailProvider {
	private transporter: Mail

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: HOST,
			port: Number(PORT),
			auth: {
				user: USER,
				pass: PASSWORD,
			},
		})
	}

	async sendMails(message: IMessage): Promise<void> {
		await this.transporter.sendMail({
			to: {
				name: message.to.name,
				address: message.to.email,
			},
			from: {
				name: message.from.name,
				address: message.from.email,
			},
			subject: message.subject,
			html: message.body,
		})
	}
}
