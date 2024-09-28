const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { CLOUD_NAME, API_SECRET, API_KEY } = require("./env");

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_secret: API_SECRET,
  api_key: API_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "CloudinaryDemo",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

module.exports = { storage };
