import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import connectDb from "@/middleware/Mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    let user = await User.findOne({
      email: req.body.email,
    });
    let bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
    let decryptedpassword = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (
        req.body.email == user.email &&
        req.body.password == decryptedpassword
      ) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          process.env.JWT_SECRET,
          { expiresIn: "2d" }
        );
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({ success: false, error: "invalid credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "no user found" });
    }
  } else {
    res.status(400).json({ error: "bad request" });
  }
};

export default connectDb(handler);
