import React, { useState } from 'react';
import { ExternalLink, Code, Globe, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

// Importez les projets depuis Portfolio
import { projects as importedProjects } from './Portfolio';

const sortOptions = [
  { label: 'Titre (A-Z)', value: 'title' },
  { label: 'Catégorie', value: 'category' },
  { label: 'Favoris', value: 'favorite' }
];

const Projects: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>('title');

  const sortedProjects = [...importedProjects].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    if (sortBy === 'favorite') {
      return Number(b.favorite) - Number(a.favorite);
    }
    return 0;
  });

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank');
  };

  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Tous mes projets</h2>
            <p className="text-gray-600">Explorez l'ensemble de nos réalisations.</p>
          </div>
          <div className="relative inline-block">
            <select
              className="appearance-none border border-gray-300 rounded px-4 py-2 pr-8 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Projects;
