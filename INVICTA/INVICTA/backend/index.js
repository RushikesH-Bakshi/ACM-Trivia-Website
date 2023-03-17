const { sequelize, Scores } = require('./models')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.post("/register", async (req, res) =>{
  try {
    const participant = await Scores.create({ email: req.body.email})

    res.send({ success: true });
  } catch (e) { 
    res.status(500).send(e); 
  }
})

app.post("/logos-scores", async (req, res) =>{
  try {
    await Scores.update({ logos_score: req.body.score }, {
      where: { email: req.body.email }
    });

    res.send({ success: true });
  } catch (e) { 
    res.status(500).send(e); 
  }
})

app.post("/gibberish-scores", async (req, res) =>{
  try {
    await Scores.update({ gibberish_score: req.body.score }, {
      where: { email: req.body.email }
    });

    res.send({ success: true });
  } catch (e) { 
    res.status(500).send(e); 
  }
})

app.listen(3000)