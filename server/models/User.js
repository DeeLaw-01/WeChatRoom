
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  socketId: String,
  username: String,
  email: String,
  password: String
})

const User = mongoose.model('User', UserSchema)

export default User