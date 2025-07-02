import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans" style={{ backgroundColor: "rgb(31, 20, 0)" }}>
        <div className="flex flex-col min-h-screen">
          <header className="py-4 mb-8 shadow" style={{ backgroundColor: "rgb(10, 7, 0)" }}>
            <NavBar />
          </header>
          <div className="flex-1 flex justify-center">
            <main className="bg-black w-full max-w-4xl min-h-[70vh] p-4 mx-2 rounded-xl shadow-lg">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}