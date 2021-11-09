import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Shop } from ".prisma/client";

interface Data {
  shops?: Shop[];
  message?: string;
}

function shuffleArray(array: Shop[]) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid" });
  }
  try {
    const shops: Shop[] = await prisma.shop.findMany();
    shuffleArray(shops);
    return res.status(200).json({ shops });
  } catch (error) {
    //
  }
  return res.status(400).json({ message: "Invalid" });
}
