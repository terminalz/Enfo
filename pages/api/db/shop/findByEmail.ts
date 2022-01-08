import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Shop } from ".prisma/client";

interface Data {
  shops?: Shop[];
  message?: string | any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid" });
  }
  try {
    const shops: Shop[] = await prisma.user
      .findUnique({ where: { email: req.body.email } })
      .shop();

    return res.status(200).json({ shops });
  } catch (error) {
    //
    // return res.status(400).json({ message: error.message });
    return res.status(400).json({ message: "Invalid" });
  }
}

// {
//     "email": "ziqinyeow@gmail.com"
// }
