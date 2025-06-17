import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Akanni Johannes</h3>
            <p className="text-gray-300">
              Développeur web freelance passionné, je crée des sites web modernes et performants
              pour donner vie à vos projets digitaux.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Heart className="text-red-500" size={16} />
              <span className="text-sm">Fait avec passion en France</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'apropos', label: 'À propos' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'contact', label: 'Contact' },
                { id: 'faq', label: 'FAQ' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-gray-300 hover:text-orange-500 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="flex flex-col space-y-2 text-gray-300">
              <div>Site Vitrine - dès 59€</div>
              <div>Application Web - sur devis</div>
              <div>Maintenance - 19€/mois</div>
              <div>E-commerce - dès 150€</div>
              <div>SEO & Référencement</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500" size={18} />
                <span className="text-gray-300">akanni.johannes@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500" size={18} />
                <span className="text-gray-300">06 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" size={18} />
                <span className="text-gray-300">France entière</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Akanni Johannes. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;