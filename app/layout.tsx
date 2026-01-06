import './globals.css';

export const metadata = {
  title: 'Mestre Reginaldo | Axé da Bahia',
  description: 'Amarração Amorosa e Limpeza Espiritual em Brasil e Portugal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
