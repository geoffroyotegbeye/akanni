import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  onNavigate: (section: string) => void;
  onOpenChat: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onNavigate, onOpenChat }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Les délais dépendent de la complexité du projet. Pour un site vitrine simple, comptez 7 à 10 jours ouvrés. Pour un site avec options supplémentaires, 10 à 15 jours. Les applications web sont évaluées au cas par cas, mais je m'engage à respecter les délais convenus."
    },
    {
      question: "Proposez-vous l'hébergement et la maintenance ?",
      answer: "Oui ! L'hébergement de la première année est inclus dans mes offres de site vitrine. Je propose également un service de maintenance à 19€/mois qui comprend les mises à jour, sauvegardes automatiques, support technique et monitoring sécurité."
    },
    {
      question: "Comment se déroule le processus de création ?",
      answer: "Le processus comprend 5 étapes : 1) Briefing et analyse de vos besoins, 2) Création de la maquette, 3) Développement du site, 4) Tests et révisions, 5) Mise en ligne et formation. Vous êtes impliqué à chaque étape pour valider l'avancement."
    },
    {
      question: "Quels sont vos tarifs et modalités de paiement ?",
      answer: "Mes tarifs commencent à 59€ pour un site vitrine basique. Les options supplémentaires sont détaillées dans la section Services. Le paiement s'effectue en 2 fois : 50% à la commande et 50% à la livraison, par virement bancaire sécurisé."
    },
    {
      question: "Mes sites sont-ils optimisés pour mobile ?",
      answer: "Absolument ! Tous mes sites sont conçus avec une approche 'Mobile First', ce qui signifie qu'ils s'adaptent parfaitement à tous les écrans : smartphone, tablette et desktop. C'est inclus dans toutes mes offres."
    },
    {
      question: "Proposez-vous des formations pour gérer mon site ?",
      answer: "Oui, je propose une formation gratuite à la livraison pour vous apprendre à modifier les contenus de base de votre site. Pour des besoins plus avancés, des formations personnalisées peuvent être organisées."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Votre satisfaction est ma priorité. Je propose jusqu'à 3 révisions gratuites pendant le développement. Si le résultat ne correspond pas au brief initial, nous travaillerons ensemble pour corriger le problème sans frais supplémentaires."
    },
    {
      question: "Travaillez-vous avec des clients dans toute la France ?",
      answer: "Oui, je travaille avec des clients dans toute la France. Grâce aux outils de communication modernes, je peux mener vos projets à distance de manière efficace. Des rencontres en visioconférence peuvent être organisées."
    },
    {
      question: "Puis-je avoir un site e-commerce ?",
      answer: "Oui, je propose des solutions e-commerce adaptées à vos besoins. Selon la complexité (nombre de produits, fonctionnalités spécifiques), le tarif est établi sur devis. Une boutique simple peut être créée à partir de 150€."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "La sécurité est une priorité. J'utilise des protocoles HTTPS, des sauvegardes régulières, et je suis les meilleures pratiques en matière de sécurité web. Vos données personnelles sont traitées selon le RGPD."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Toutes les réponses à vos questions sur mes services
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="transform transition-transform duration-300 ease-in-out">
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-orange-500 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-orange-500 flex-shrink-0" size={24} />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à me contacter pour toute question spécifique à votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Me contacter
            </button>
            <button 
              onClick={onOpenChat}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Chater avec le bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;