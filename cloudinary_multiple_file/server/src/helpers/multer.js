const multer = require('multer');

const storage = multer.diskStorage({});
const limits = { fileSize: 500000 };
const upload = multer({ storage, limits }).array('file', 10);

module.exports = upload;