import React from 'react';
import { ExternalLink, Code, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  favorite: boolean;
}

interface PortfolioProps {
  onNavigate?: (section: string) => void;
}

const projects: Project[] = [
  {
    title: "Restaurant Le Gourmet",
    category: "Site Vitrine",
    description: "Site vitrine moderne pour un restaurant gastronomique avec système de réservation intégré.",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Tailwind CSS", "Responsive"],
    demoLink: "https://zutools.netlify.app/",
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: false
  },
  {
    title: "Cabinet d'Avocat",
    category: "Site Professionnel",
    description: "Site web professionnel pour un cabinet d'avocat avec blog et formulaire de contact sécurisé.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "SEO", "Blog"],
    demoLink: "https://zutools.netlify.app/",
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: false
  },
  {
    title: "E-commerce Artisan",
    category: "Boutique en ligne",
    description: "Boutique en ligne pour un artisan avec gestion des stocks et paiement sécurisé.",
    image: "https://images.pexels.com/photos/5625121/pexels-photo-5625121.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["E-commerce", "Stripe", "Dashboard"],
    demoLink: "https://zutools.netlify.app/",
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: false
  },
  {
    title: "Agence Immobilière",
    category: "Site Vitrine",
    description: "Site vitrine pour une agence immobilière avec recherche avancée et visite virtuelle.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Vue.js", "API", "Recherche"],
    demoLink: "https://zutools.netlify.app/",
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: false
  },
  {
    title: "App de Gestion RH",
    category: "Application Web",
    description: "Application web complète pour la gestion des ressources humaines d'une PME.",
    image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "https://zutools.netlify.app/",
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: false
  },
  {
    title: "Portfolio Photographe",
    category: "Site Créatif",
    description: "Portfolio élégant pour un photographe professionnel avec galerie interactive.",
    image: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["CSS Grid", "Animations", "Lightbox"],
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: false
  },
  {
    title: "ZuTools",
    category: "Application Web",
    description: "Collection d'outils en ligne gratuits et pratiques pour améliorer votre productivité quotidienne.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://zutools.netlify.app/",
    githubLink: "https://github.com/geoffroyotegbeye/zutools",
    favorite: true
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const favoriteProjects = projects.filter((project) => project.favorite);

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mes Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques projets que j'ai eu le plaisir de réaliser
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleDemoClick(project.demoLink || '#')}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      title="Voir le site"
                    >
                      <ExternalLink size={20} />
                    </button>
                    <button 
                      onClick={() => handleGithubClick(project.githubLink || '#')}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      title="Voir le code source"
                    >
                      <Code size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <Globe className="text-gray-400" size={16} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/projects">
            <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
              Voir plus
            </button>
          </Link>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Envie de voir votre projet prendre vie ?
          </p>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
export { projects };