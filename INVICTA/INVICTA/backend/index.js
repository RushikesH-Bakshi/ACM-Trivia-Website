const { sequelize } = require('./models')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main()

app.listen(3000)