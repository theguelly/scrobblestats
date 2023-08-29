import spotifyRefresh from "@/utils/refresh-token";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let result = await spotifyRefresh();
  return res.status(200).json(result);
}
  