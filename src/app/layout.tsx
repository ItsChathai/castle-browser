import Navigation from './components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Castle',
  description: 'New chat app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='page-container'>
      <Navigation/>
      {children}
      </div>
      </body>
    </html>
  )
}
