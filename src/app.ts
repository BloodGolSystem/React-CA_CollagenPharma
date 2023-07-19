import "dotenv/config"
import express from "express"
import cors from "express"
import userRoute from "./route/user.route"
import dbInit from "./db/mongo";

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log('Listo por el puerto ' + port))



// "type": "module",

// "scripts": {
    // "test": "react-scripts test",
    // "start": "react-scripts start",
    //"build": "react-scripts build",
    //"eject": "react-scripts eject"
// }