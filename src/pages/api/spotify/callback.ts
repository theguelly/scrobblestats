import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let result = {}
  const params: any = {};

  params['client_id'] = process.env.SPOTIFY_CLIENT_ID as string
  params['client_secret'] = process.env.SPOTIFY_CLIENT_SECRET as string
  params['grant_type'] = 'authorization_code'
  params['code'] = req.query['code'] as string
  params['redirect_uri'] = process.env.SPOTIFY_REDIRECT_URL as string

  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params),
  }).then((response) => {
    console.log(response)
    return response.json()
  })
  .then((data) => result = data);
  return res.status(200).json(result);
}
  