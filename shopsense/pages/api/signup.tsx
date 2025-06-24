import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import connectDb from "@/middleware/Mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    let { name, email } = req.body;
    let u = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString(),
    });
    await u.save();

    res.status(200).json({ message: "success" });
  } else {
    res.status(400).json({ error: "bad request" });
  }
};

export default connectDb(handler);
