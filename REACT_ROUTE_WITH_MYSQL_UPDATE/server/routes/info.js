const express = require("express");
const router = express.Router();
const { info } = require("../models");

//for data fetch..
router.get("/", async (req, res) => {
    const listOfPosts = await info.findAll();
    res.json(listOfPosts);
});

module.exports = router;