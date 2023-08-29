import spotifyRefresh from "@/utils/refresh-token";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { access_token } = await spotifyRefresh() as any;
  let result: any = {}

  await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    return response.json()
  })
  .then((data) => result = data);
  console.log(result)

  const isSongPlaying = !!result?.item;

  if (!isSongPlaying) {
    throw new Error("No song playing")
  }

  return res.status(200).json({
    song: result.item.name,
    artist: result.item.artists.map((artist: any) => artist.name).join(', '),
    url: result.item.external_urls.spotify,
    art: result.item.album.images[0].url,
  });
}
  