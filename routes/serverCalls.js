const { sequelize, Scores } = require('../models')
const { ValidationError } = require('sequelize')
const express = require("express");
const router = express.Router();


router.post("/register", async (req, res) =>{
    try {
      const participant = await Scores.create({ email: req.body.email})
      
      res.send({ 
        success: true,
        message: "You have been signed in, please scroll down to start with the trivia"
      });
    } catch (e) { 
      if (e instanceof ValidationError) {
        res.status(500).send({
          success: true,
          message: "You were already signed in, please scroll down to start with the trivia"
        })
      }
    }
})

router.post("/logos-scores", async (req, res) =>{
    try {
      await Scores.update({ logos_score: req.body.score }, {
        where: { email: req.body.email }
      });
      
      res.send({ success: true });
    } catch (e) { 
        res.status(500).send(e); 
    }
})
  
  router.post("/gibberish-scores", async (req, res) =>{
    try {
      await Scores.update({ gibberish_score: req.body.score }, {
        where: { email: req.body.email }
      });
  
      res.send({ success: true });
    } catch (e) { 
      res.status(500).send(e); 
    }
  })

  module.exports = router