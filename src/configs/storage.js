const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, API_SECRET, API_KEY } = require("./contants");
const multer = require("multer");

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_secret: API_SECRET,
  api_key: API_KEY,
});

const memoryStorage = multer.memoryStorage();

const memoryUpload = multer({ storage: memoryStorage });

module.exports.memoryUpload = memoryUpload;

module.exports.cloudinary = async function (filePath) {
  const result = await cloudinary.uploader.upload(filePath);

  return result.secure_url;
};

const localStorageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/media/form_images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const localStorage = multer({ storage: localStorageConfig });

module.exports.localStorage = localStorage;
