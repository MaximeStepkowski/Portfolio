import BurgerMenu from '@/components/BurgerMenu';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-gray-100 text-black">
        <BurgerMenu/>
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}