"use client"
import './globals.css'
export const metadata = {
  title: 'Merit',
  description: 'Decentralized badge platform',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  
  
  

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
