import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SC0FI",
  description: "SC0FI's personal links",
  icons: {
    icon: "https://github.com/SC0FI.png",
    shortcut: "https://github.com/SC0FI.png",
    apple: "https://github.com/SC0FI.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
