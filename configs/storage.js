const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { CLOUD_NAME, API_SECRET, API_KEY } = require("./env");
const multer = require("multer");

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_secret: API_SECRET,
  api_key: API_KEY,
});

const cloudStorageConfig = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "CloudinaryDemo",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

const cloudStorage = multer({ storage: cloudStorageConfig });

module.exports.cloudStorage = cloudStorage;

const localStorageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/media/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const localStorage = multer({ storage: localStorageConfig });

module.exports.localStorage = localStorage;
