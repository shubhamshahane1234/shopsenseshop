// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  body: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // update status into Orders table after checking the transaction status
  // Initiate Shipping
  // Redirect user to the order confirmation page
  res.status(200).json({ body: req.body });
}
