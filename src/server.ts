import { serverHttp } from "./app"

const port = 3000

serverHttp.listen(port, (): void => {
	console.log(`Running on port: ${port}`)
})
