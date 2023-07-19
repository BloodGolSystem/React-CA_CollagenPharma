import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;
// error 17:00 por ahi
const dbInit = async () => {
    await connect(DB_URI)
    console.log('Estamos ready?')
}

export default dbInit