import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};

const https = require("https");
/*
 * import checksum generation utility
 * You can get this utility from https://paytmpayments.com/docs/checksum/
 */
const PaytmChecksum = require("paytmchecksum");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    var paytmParams: any = {};
    // Insert an entry in the Orders table with status as pending
    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.NEXT_PUBLIC_PAYTM_MID,
      websiteName: "WEBSTAGING",
      orderId: req.body.oid,
      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
      txnAmount: {
        value: req.body.subTotal,
        currency: "INR",
      },
      userInfo: {
        custId: req.body.email,
      },
    };

    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytmpayments.com/next/apikeys
     */
    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.NEXT_PUBLIC_PAYTM_MKEY
    );

    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    const requestAsyn = async () => {
      return new Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          hostname: "securestage.paytmpayments.com",

          /* for Production */
          //   hostname: "secure.paytmpayments.com",

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res: any) {
          post_res.on("data", function (chunk: any) {
            response += chunk;
          });

          post_res.on("end", function () {
            console.log("Response: ", response);
            resolve(response);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };

    let myr: any = await requestAsyn();
    myr = JSON.parse(myr);
    return res.status(200).json(myr);
  }
}
