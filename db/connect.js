const mongoose = require('mongoose')

const connectDB = async (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }, (error) => error ? console.log(error) : console.log("DB connected.."))
}

module.exports = connectDB
