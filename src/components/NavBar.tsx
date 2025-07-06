import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="max-w-4xl mx-auto flex justify-center gap-8">
      <Link href="/" className="text-white text-lg font-semibold hover:underline hover:scale-105">Accueil</Link>
      <Link href="/about" className="text-white text-lg font-semibold hover:underline hover:scale-105">À propos</Link>
      <Link href="/projects" className="text-white text-lg font-semibold hover:underline hover:scale-105">Projets</Link>
      <Link href="/contact" className="text-white text-lg font-semibold hover:underline hover:scale-105">Contact</Link>
    </nav>
  );
}
