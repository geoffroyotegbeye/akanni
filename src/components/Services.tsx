import React from 'react';
import { Globe, Smartphone, Code, Wrench, CheckCircle, Clock, Euro } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="text-orange-500" size={32} />,
      title: "Site Vitrine",
      price: "À partir de 59€",
      description: "Site web professionnel pour présenter votre activité",
      features: [
        "Design responsive",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Hébergement 1 an inclus",
      ],
      color: "orange",
    },
    {
      icon: <Code className="text-blue-500" size={32} />,
      title: "Application Web",
      price: "Sur devis",
      description: "Solution sur mesure pour vos besoins spécifiques",
      features: [
        "Étude gratuite du besoin",
        "Développement personnalisé",
        "Base de données intégrée",
        "Formation utilisateur",
      ],
      color: "blue",
    },
    {
      icon: <Wrench className="text-green-500" size={32} />,
      title: "Maintenance",
      price: "19€/mois",
      description: "Gardez votre site à jour et sécurisé",
      features: [
        "Mises à jour régulières",
        "Sauvegardes automatiques",
        "Support technique",
        "Monitoring sécurité",
      ],
      color: "green",
    },
  ];

  const additionalOptions = [
    { name: "Design personnalisé", price: "+20€" },
    { name: "SEO avancé", price: "+30€" },
    { name: "Site multilingue", price: "+25€" },
    { name: "E-commerce basique", price: "+50€" },
    { name: "Intégration réseaux sociaux", price: "+15€" },
    { name: "Animations avancées", price: "+35€" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions web adaptées à vos besoins et votre budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-orange-200"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-orange-500 mb-4">{service.price}</div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Options supplémentaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-700">{option.name}</span>
                <span className="font-semibold text-orange-500">{option.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <Clock className="text-white mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Délais de livraison</h3>
            <ul className="space-y-2">
              <li>• Site vitrine simple : 7-10 jours ouvrés</li>
              <li>• Site avec options : 10-15 jours ouvrés</li>
              <li>• Application web : selon complexité</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
            <Euro className="text-white mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-4">Modalités de paiement</h3>
            <ul className="space-y-2">
              <li>• 50% à la commande</li>
              <li>• 50% à la livraison</li>
              <li>• Paiement sécurisé par virement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;