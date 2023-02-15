import { Playfair_Display, Montserrat } from "@next/font/google"
import Providers from "./api/providers"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <head />
      <body className={montserrat.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
