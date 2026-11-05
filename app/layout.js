import './globals.css'

export const metadata = {
  title: 'CROWN Properties',
  description: 'CROWN Properties secure member portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
