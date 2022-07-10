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

module.exports = router;