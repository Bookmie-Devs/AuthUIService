// const { Buffer } = require("buffer");
// const crypto = require("crypto");

// const key = "628ede1154f0db022dc282c74d982ddb";
// const iv = "h796bf9f225d-dd0";

// function encrypt(text) {
//   const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
//   let encrypted = cipher.update(text, "utf8", "hex");
//   encrypted += cipher.final("hex");
//   //   const tag = cipher.getAuthTag();
//   return {
//     encryptedData: encrypted,
//   };
// }

// console.log(encrypt("2"));

// const iv = crypto.randomBytes(16); // Generate a random IV
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// const encryptedData =
//   cipher.update(plaintext, "utf8", "hex") + cipher.final("hex");
