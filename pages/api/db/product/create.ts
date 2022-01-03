import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Product } from ".prisma/client";

interface Data {
  shop?: Product;
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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name, description, price, image_url, backlink_url } =
      req.body.product;

    await prisma.product.create({
      data: {
        name,
        description,
        price,
        image_url,
        backlink_url,
        shop: {
          connect: {
            id: req.body.shop_id,
          },
        },
      },
    });

    return res.status(200).json({ message: "Created" });
  } catch (error) {
    // console.log(error.message);
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
