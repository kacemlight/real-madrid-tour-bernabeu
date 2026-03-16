export default function SiteHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" aria-label="Real Madrid – Accueil">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
            alt="Real Madrid CF"
            className="h-10 w-auto"
            width={40}
            height={40}
          />
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex gap-6 text-sm font-medium text-gray-700">
            <li><a href="#tour" className="hover:text-yellow-500 transition-colors">Tour</a></li>
            <li><a href="#tickets" className="hover:text-yellow-500 transition-colors">Billets</a></li>
            <li><a href="#gallery" className="hover:text-yellow-500 transition-colors">Galerie</a></li>
            <li><a href="#faq" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
