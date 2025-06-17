import React from 'react';
import { User, Award, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionné par le développement web depuis plus de 5 ans, je mets mon expertise
            au service de votre projet digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Bonjour ! Je suis <strong>Akanni Johannes</strong>, développeur web freelance
                spécialisé dans la création de sites vitrine et d'applications web modernes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mon approche se base sur l'écoute de vos besoins, la créativité dans le design
                et l'excellence technique. Chaque projet est unique et mérite une attention particulière.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Je privilégie les technologies modernes comme React, Next.js et Tailwind CSS
                pour créer des sites performants, sécurisés et faciles à maintenir.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="text-orange-500 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">5+ ans d'expérience</h3>
                <p className="text-sm text-gray-600">Expert en développement web moderne</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heart className="text-red-500 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-sm text-gray-600">Créer des expériences digitales uniques</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes valeurs</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-lg p-3">
                  <User className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Écoute client</h4>
                  <p className="text-gray-600">Comprendre vos besoins pour créer la solution parfaite</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Lightbulb className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">Utiliser les dernières technologies pour vos projets</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Award className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Qualité</h4>
                  <p className="text-gray-600">Livrer des solutions robustes et performantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;