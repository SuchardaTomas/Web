export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo a kontaktní informace */}
        <div>
          <img src="/logo.png" alt="Logo" className="mb-4" />
          <p className="text-gray-400">
            © 2024 Název společnosti, všechna práva vyhrazena.
          </p>
          <p className="mt-2">Adresa společnosti</p>
          <p>Telefon: +420 123 456 789</p>
          <p>E-mail: info@spolecnost.cz</p>
        </div>

        {/* Odkazy na důležité stránky */}
        <div>
          <h3 className="font-semibold mb-4">Důležité odkazy</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">O nás</a></li>
            <li><a href="/terms" className="hover:underline">Podmínky užívání</a></li>
            <li><a href="/privacy" className="hover:underline">Ochrana osobních údajů</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/careers" className="hover:underline">Kariéra</a></li>
          </ul>
        </div>

        {/* Sociální sítě a newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Sociální sítě</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Přihlášení k newsletteru</h3>
            <form>
              <input
                type="email"
                placeholder="Váš e-mail"
                className="px-4 py-2 w-full bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
              >
                Přihlásit se
              </button>
            </form>
          </div>
        </div>

        {/* Platební metody a další odkazy */}
        <div>
          <h3 className="font-semibold mb-4">Platební metody</h3>
          <div className="flex space-x-4">
            <img src="/visa.png" alt="Visa" className="h-8" />
            <img src="/mastercard.png" alt="MasterCard" className="h-8" />
            <img src="/paypal.png" alt="PayPal" className="h-8" />
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Další odkazy</h3>
            <ul className="space-y-2">
              <li><a href="/sitemap" className="hover:underline">Mapa webu</a></li>
              <li><a href="/certificates" className="hover:underline">Certifikace a ocenění</a></li>
              <li><a href="/reviews" className="hover:underline">Reference</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spodní část patičky */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-400">Vyrobeno s ❤️ v České republice.</p>
      </div>
    </footer>
    </>
  );
}
