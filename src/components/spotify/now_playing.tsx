import Image from 'next/image'
import spotifyRefresh from "@/utils/refresh-token";

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
          <div className="absolute mx-auto max-w-md left-0 right-0 bg-cover bg-center bottom-10 mb-4 z-10 w-full rounded-lg drop-shadow-lg" style={{ backgroundImage: `url('${result.art}')` }}>
            <div className='backdrop-brightness-[0.25] self-center rounded-lg min-w-full pb-5 backdrop-blur'>
              <div className='px-5 py-1'>
                <span className='text-sm drop-shadow-xl mix-blend-difference'>theguelly&apos;s { result.is_playing ? 'now playing' : 'last played'}:</span>
              </div>
              <a href={result.url} className="flex items-center px-5" title={`${result.artist} - ${result.song}`} target="_blank">
                <div className="flex-shrink-0 ">
                  <Image width='300' height='300' className="h-14 w-auto drop-shadow-lg rounded-2xl" src={result.art} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white py-1 max-w-xs truncate mix-blend-difference">
                    {result.song}
                  </div>
                  <div className="text-xs font-medium leading-none text-gray-400 py-1 max-w-xs truncate mix-blend-difference">
                    {result.artist}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
