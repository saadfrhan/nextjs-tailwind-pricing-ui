import '../styles/globals.css';
import { Inter } from '@next/font/google';

export const metadata = {
  title: 'Pricing UI',
  description: 'Pricinğ UI created using Next.js 13 and Tailwind CSS'
}

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
