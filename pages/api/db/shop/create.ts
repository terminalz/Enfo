import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Shop } from ".prisma/client";

interface Data {
  shop?: Shop;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid" });
  }
  try {
    const shop: Shop = await prisma.shop.create({
      data: {
        ...req.body.shop,
        user: {
          connect: {
            email: req.body.email,
          },
        },
      },
    });
    return res.status(200).json({ shop });
  } catch (error) {
    //
  }
  return res.status(400).json({ message: "Invalid" });
}

// {
//     "shop": {
//         "name":"Testing",
//         "description": "test"
//     },
//     "email": "ziqinyeow@gmail.com"
// }
