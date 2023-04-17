const multer = require('multer');

const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50000000 // 50MB in bytes
  },
  fileFilter: function(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|mov|avi|flv)$/)) {
      return cb(new Error("Only video files are allowed"));
    }
    cb(null, true);
  }
});

module.exports = upload;
