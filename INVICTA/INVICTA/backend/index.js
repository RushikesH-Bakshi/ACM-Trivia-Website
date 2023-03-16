const { sequelize, Scores } = require('./models')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.static('public'))
// app.use(express.static('views'))

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// main()

// app.get("/register", async (req, res) => {
//   res.render("home trivia");
// });

app.post("/register", async (req, res) =>{
  try {
    const participant = await Scores.create({ email: req.body.email})

    res.send({ success: true });
  } catch (e) { 
    res.status(500).send(e); 
  }
})


app.listen(3000)