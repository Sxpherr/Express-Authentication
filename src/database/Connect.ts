import mongoose from 'mongoose'
import { green } from 'chalk'

async function connect() {
  console.log(`[${green('MONGODB')}] Connecting To Database...`)
    mongoose.connect('mongodb://localhost:21789/Express-Auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
  console.log(`[${green('MONGODB')}] Connected To Database...`)
}

module.exports = connect()