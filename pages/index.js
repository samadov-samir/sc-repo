import Image from 'next/image'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import SearchBar from '@/components/SearchBar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Social Media App</title>
    </Head>
    <main className="flex min-h-screen mx-auto">
      <Sidebar />
      <Feed />
      <SearchBar />
    </main>
    </>
  )
}
