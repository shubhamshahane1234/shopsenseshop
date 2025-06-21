import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import connectDb from "@/middleware/Mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    let data = req.body;
    let u = new User(data);
    await u.save();

    res.status(200).json({ message: "success" });
  } else {
    res.status(400).json({ error: "bad request" });
  }
};

export default connectDb(handler);
