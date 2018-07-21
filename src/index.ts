
import * as express from "express"
import { Server } from "typescript-rest"
import { json, urlencoded} from 'body-parser'

// Controllers
import { NotificationsController } from './controllers'

let app: any = express();

// Im ignoring the CORS allowance
// and of course the auth verification

app.use(json())
app.use(urlencoded({ extended: false }))

Server.buildServices(app,
  NotificationsController
)

app.listen(3000, function() {
  console.log('Server listening in port: 3000')
});
