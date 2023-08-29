import NowPlaying from "@/components/spotify/now_playing"

export const metadata = {
  title: `Home | ${process.env.APP_NAME}`,
  description: 'Generated by Next.js',
}

export default function About() {
  return (
    <>
      <div>Index</div>
      <NowPlaying />
    </>
  )
}