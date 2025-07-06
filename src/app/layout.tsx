import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-[#c9e560] bg-repeat bg-top bg-left bg-cover">
        <div className="flex flex-col min-h-screen">
          <header
            className="py-4 mb-8"
            style={{
              backgroundColor: "#000"
            }}
          >
            <NavBar />
          </header>
          <div className="flex-1 flex justify-center">
            <main
              className="bg-black w-full max-w-6xl min-h-[70vh] p-8 mx-2 rounded-xl shadow-lg"
              style={{
                boxShadow: "0 4px 32px 0 #b2cc4c"
              }}
            >
              {children}
            </main>
          </div>
          <div className="pb-8" />
          <footer
            style={{
              backgroundColor: "#000"
            }}
          >
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}