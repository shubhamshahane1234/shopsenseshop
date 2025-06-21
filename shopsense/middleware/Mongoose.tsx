import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

const connectDb =
  (handler: {
    (req: NextApiRequest, res: NextApiResponse): Promise<void>;
    (req: NextApiRequest, res: NextApiResponse): Promise<void>;
    (arg0: NextApiRequest, arg1: NextApiResponse): any;
  }) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI as string);
    return handler(req, res);
  };

export default connectDb;
