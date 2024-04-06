

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryProvider } from '../providers/ReactQueryProvider'
import Navbar from '../_components/navbar/Navbar'
import ClientOnly from '../components/ClientOnly'
import { draftMode } from 'next/headers'
import LiveVisualEditing from '../components/LiveVisualEditing'
import Footer from '../_components/footer/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meta data will be here mate',
  description: 'Meta Data Mate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReactQueryProvider>

      <Navbar />
          <ClientOnly>
          {children}
          {draftMode().isEnabled && <LiveVisualEditing />}
          </ClientOnly>
          <Footer />
          </ReactQueryProvider>

      </body>
    </html>
  )
}