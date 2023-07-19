import { Router } from "express"
import { insertUser, getUser } from "../controller/user.ctrl"

const route = Router()
/**
 * Aquí ruta POST HTTP
 */
route.post('/user', insertUser)
/**
 * Ruta de GET detail
 */
route.get('/user', getUser)

export default route