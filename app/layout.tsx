import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mestre Reginaldo | O Verdadeiro Axé da Bahia',
  description: 'Amarração Amorosa, Limpeza e Proteção Espiritual. Especialista no Brasil e Portugal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
