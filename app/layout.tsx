import styles from './layout.module.css'
import '@styles/global.css'
import { Inter, Nanum_Pen_Script } from 'next/font/google'
import ThemeProvider from '@components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const nanumPenScript = Nanum_Pen_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nanum-pen-script',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nanumPenScript.variable}`}
      suppressHydrationWarning
    >
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
