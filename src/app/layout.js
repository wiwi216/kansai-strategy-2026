import './globals.css'

export const metadata = {
  title: '2026 關西戰略',
  description: '專家級關西深度文化與物流戰略分析',
  manifest: '/manifest.json', // 如果您進階想做 PWA
  appleWebApp: {
    capable: true,
    title: '關西戰略',
    statusBarStyle: 'black-translucent',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // 禁止縮放，像原生 App
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
