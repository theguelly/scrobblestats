export default async function spotifyRefresh() {
  let result = {}
  const params: any = {};

  params['client_id'] = process.env.SPOTIFY_CLIENT_ID as string
  params['client_secret'] = process.env.SPOTIFY_CLIENT_SECRET as string
  params['grant_type'] = 'refresh_token'
  params['refresh_token'] = process.env.SPOTIFY_REFRESH_TOKEN as string

  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params)
  }).then((response) => {
    return response.json()
  })
  .then((data) => result = data);

  return result
}