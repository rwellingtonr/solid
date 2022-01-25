import { IMailProvider, IMessage } from "../IMailProvider"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import "dotenv/config"
export class MailtrapMailProvider implements IMailProvider {
	private transporter: Mail

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.HOST,
			port: Number(process.env.PORT),
			auth: {
				user: process.env.USER,
				pass: process.env.PASSWORD,
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
