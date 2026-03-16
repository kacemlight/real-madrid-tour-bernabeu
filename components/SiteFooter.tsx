export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="text-white font-semibold text-lg">Tour Bernabéu</p>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Real Madrid C.F. Tous droits réservés.</p>
        </div>
        <div className="text-sm space-y-1">
          <p>Avenida de Concha Espina, 1, 28036 Madrid</p>
          <p>Lun–Dim : 09:00 – 19:00</p>
          <a href="mailto:tour@realmadrid.com" className="hover:text-white transition-colors">tour@realmadrid.com</a>
        </div>
      </div>
    </footer>
  );
}
