import Image from 'next/image'
import spotifyRefresh from "@/utils/refresh-token";
import { GetServerSideProps } from 'next';

export default async function NowPlaying() {
  let { access_token } = await spotifyRefresh() as any;
  let result: any = {}

  try {
    await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      cache: 'no-store'
    }).then((response) => {
      return response.json()
    })
    .then((data) => result = {
      song: data.item.name,
      artist: data.item.artists.map((artist: any) => artist.name).join(', '),
      url: data.item.external_urls.spotify,
      art: data.item.album.images[0].url,
      is_playing: data.is_playing
    });
  } catch {
    result = false
  }

  return (
    <>
      {(result &&
        <>
          <div className="absolute bottom-20 z-10 w-fit bg-gray-600 py-3 rounded shadow-lg shadow-gray-900 ring-1 ring-black ring-opacity-5">
            <div className='px-5 mb-1'>
              <span className='text-sm'>theguelly&apos;s { result.is_playing ? 'now playing' : 'last played'}:</span>
            </div>
            <a href={result.url} className="flex items-center px-5" title={`${result.artist} - ${result.song}`} target="_blank">
              <div className="flex-shrink-0">
                <Image width='100' height='100' className="h-10 w-10  rounded-full" src={result.art} alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white py-1 max-w-xs truncate">
                  {result.song}
                </div>
                <div className="text-sm font-medium leading-none text-gray-400 py-1 max-w-xs truncate">
                  {result.artist}
                </div>
              </div>
            </a>
          </div>
        </>
      )}
    </>
  )
}
