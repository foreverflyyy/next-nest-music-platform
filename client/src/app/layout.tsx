import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import {Providers} from "@/store/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music platform',
  description: 'Music platform on next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          <div className={"h-[100vh] pt-[50px] md:container mx-auto"}>
            {children}
          </div>
          <Player/>
        </Providers>
      </body>
    </html>
  )
}
