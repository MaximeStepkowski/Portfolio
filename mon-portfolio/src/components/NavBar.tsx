export default function NavBar() {
  return (
    <nav className="max-w-4xl mx-auto flex justify-center gap-8">
      <a href="/" className="text-white text-lg font-semibold hover:underline">Accueil</a>
      <a href="/about" className="text-white text-lg font-semibold hover:underline">À propos</a>
      <a href="/projects" className="text-white text-lg font-semibold hover:underline">Projets</a>
      <a href="/contact" className="text-white text-lg font-semibold hover:underline">Contact</a>
    </nav>
  );
}
