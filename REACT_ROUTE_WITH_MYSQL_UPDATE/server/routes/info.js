const express = require("express");
const router = express.Router();
const { infos } = require("../models");

//for data fetch..
router.get("/", async (req, res) => {
    const listOfPosts = await infos.findAll();
    res.json(listOfPosts);
});


//for create post..
router.post("/", async (req, res) => {
    const post = req.body;
    await infos.create(post);
    res.json(post);
});


// form id fetch data
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const post = await infos.findByPk(id);
    res.json(post);
  });

module.exports = router;