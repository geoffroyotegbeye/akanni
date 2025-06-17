import React from 'react';
import { ArrowRight, Code, Globe, Smartphone } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Créateur de <span className="text-orange-500">sites web</span> et <span className="text-orange-500">applications</span> sur mesure
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Développeur web freelance passionné, je transforme vos idées en sites web professionnels
                et applications modernes. Spécialisé dans la création et la refonte d'applications, je vous accompagne dans vos projets à partir de 59€.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Demander un site
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Voir mes réalisations
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-400">Sites créés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">7j</div>
                <div className="text-sm text-gray-400">Délai minimum</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors transform hover:scale-105">
                  <Globe className="text-orange-500 mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Sites Vitrine</h3>
                  <p className="text-sm text-gray-300">Design moderne et responsive</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors transform hover:scale-105">
                  <Code className="text-green-500 mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Applications Web</h3>
                  <p className="text-sm text-gray-300">Création et refonte sur mesure</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors transform hover:scale-105">
                  <Smartphone className="text-blue-500 mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Mobile First</h3>
                  <p className="text-sm text-gray-300">Optimisé pour tous les écrans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;