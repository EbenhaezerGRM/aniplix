import "@styles/globals.css"
import Nav from "@components/Nav"
import BottomNav from "@components/BottomNav"

export const metadata = {
  title: 'aniplix',
  description: 'Track, discover, share, and watch your favorite anime. Sign up now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
        </div>
        <main className='app'>
          <Nav/>
          {children}
          <BottomNav/>
        </main>
      </body>
    </html>
  )
}
