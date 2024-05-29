import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from '../providers/ThemeProvider'
import AuthProvider from '../providers/AuthProvider.jsx'
import ProgressBarProvider from '../providers/ProgressBarProvider.jsx'
import { ThemeContextProvider } from '../context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
          <AuthProvider>
            <ThemeContextProvider>
              <ThemeProvider>
                <div className='container'>
                  <div className='wrapper'>
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </ThemeProvider>
            </ThemeContextProvider>
          </AuthProvider>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
