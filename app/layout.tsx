import styles from './layout.module.css'
import '@styles/global.css'
import { Inter } from 'next/font/google'
import ThemeProvider from '@components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
