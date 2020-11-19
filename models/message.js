const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name:  String,
  email: String,
  subject: String,
  message: String,
});

// Crear el modelo
const Message = mongoose.model('Message', messageSchema, "Messages");

module.exports = Message;