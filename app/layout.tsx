import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Mestre Reginaldo | O Verdadeiro Axé da Bahia - Amarração e Limpeza',
  description: 'Especialista em rituais de amarração amorosa, limpeza espiritual e abertura de caminhos. Atendimento para Brasil e Portugal com sigilo absoluto.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="bg-mystic-900 text-neutral-100 antialiased selection:bg-teal-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}
