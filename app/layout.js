import './globals.css'

export const metadata = {
  title: { default: 'Life Insurance TRIO', template: '%s — Life Insurance TRIO' },
  description: 'Three life insurance agents compete. You choose the winner. Your contact info is sealed until you decide.',
  metadataBase: new URL(process.env.SITE_URL || 'https://lifeinsurancetrio.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://stats.sidecarleads.com/js/pa-CHWTNBppkAcBHkRorYA9j.js" />
        <script dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,800;1,9..144,400&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
