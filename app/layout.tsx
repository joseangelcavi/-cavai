import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CAVAI — Agentes de IA Autónomos en Español',
  description: 'Primera plataforma de agentes IA para emprendedores y PyMEs latinas. Tu negocio vendiendo mientras duermes. Agentes de WhatsApp, cobranza y contenido desde $50 USD/mes.',
  keywords: 'agentes IA, inteligencia artificial, WhatsApp, ventas automatizadas, LATAM, español, PyMEs',
  openGraph: {
    title: 'CAVAI — Tu negocio vendiendo mientras duermes',
    description: 'Agentes de IA autónomos que venden, cobran y atienden a tus clientes 24/7 por WhatsApp. En español. Desde $50 USD/mes.',
    url: 'https://cavai.lat',
    siteName: 'CAVAI',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAVAI — Agentes de IA en Español',
    description: 'Tu negocio vendiendo mientras duermes. Agentes IA autónomos desde $50/mes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
