const express = require("express");
const cloudinary = require("./cloudinary");
const uploader = require("./multer");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});




app.post("/upload", uploader.single("file"), async (req, res) => {
  const upload = await cloudinary.v2.uploader.upload(req.file.path);
  return res.json({
    success: true,
    file: upload.secure_url,
  });
});

app.listen(3000)