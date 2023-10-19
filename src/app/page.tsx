import { Spline_Sans_Mono } from 'next/font/google'

const splineSansMono = Spline_Sans_Mono({ weight: ['400'], subsets: ['latin']})

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-24">
      <div className={`${splineSansMono.className}`}>
        <h1 className="text-4xl">Hi, I'm Raphael Gatchalian.</h1>
        <h2 className="text-3xl">he/him/siya</h2>
      </div>
    </main>
  )
}
