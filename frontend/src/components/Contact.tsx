import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  whatsappPhone: string;
  projectType: string;
  isRedesign: boolean;
  existingAppUrl: string;
  budget: string;
  message: string;
  urgency: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    whatsappPhone: '',
    projectType: '',
    isRedesign: false,
    existingAppUrl: '',
    budget: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Afficher une notification de chargement
      toast.info('Envoi de votre demande en cours...', {
        position: 'top-center',
        autoClose: 2000,
      });

      // Simuler l'envoi du formulaire (à remplacer par votre logique d'envoi réelle)
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);

      // Notification de succès
      toast.success('Votre demande a été envoyée avec succès ! Je vous recontacterai dans les plus brefs délais par email ou WhatsApp.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        whatsappPhone: '',
        projectType: '',
        isRedesign: false,
        existingAppUrl: '',
        budget: '',
        message: '',
        urgency: 'normal'
      });
    } catch (error) {
      // Notification d'erreur en cas de problème
      toast.error('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Parlez-moi de vos idées !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Demander un devis</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="whatsappPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsappPhone"
                    name="whatsappPhone"
                    value={formData.whatsappPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="application">Application web</option>
                    <option value="refonte">Refonte d'application</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget indicatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="0-1000">Moins de 1000€</option>
                    <option value="1000-3000">1000€ - 3000€</option>
                    <option value="3000-5000">3000€ - 5000€</option>
                    <option value="5000-10000">5000€ - 10000€</option>
                    <option value="10000+">Plus de 10000€</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isRedesign"
                      checked={formData.isRedesign}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Il s'agit d'une refonte d'application existante</span>
                  </label>
                </div>

                {formData.isRedesign && (
                  <div className="ml-7">
                    <label htmlFor="existingAppUrl" className="block text-sm font-medium text-gray-700 mb-2">
                      URL de l'application existante
                    </label>
                    <input
                      type="url"
                      id="existingAppUrl"
                      name="existingAppUrl"
                      value={formData.existingAppUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="https://exemple.com"
                    />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Urgence du projet
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="normal">Normal (2-3 semaines)</option>
                  <option value="urgent">Urgent (1-2 semaines)</option>
                  <option value="tres-urgent">Très urgent (moins d'1 semaine)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Décrivez votre projet en détail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Mes coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-white" size={24} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-orange-100">akanni.johannes@email.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-white" size={24} />
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-orange-100">06 12 34 56 78</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-white" size={24} />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-orange-100">Contactez-moi rapidement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-500 mt-1" size={24} />
                  <div>
                    <div className="font-medium text-gray-900">Zone d'intervention</div>
                    <div className="text-gray-600">France entière (travail à distance)</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-orange-500 mt-1" size={24} />
                  <div>
                    <div className="font-medium text-gray-900">Horaires</div>
                    <div className="text-gray-600">Lun-Ven: 9h-18h<br />Réponse sous 24h</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="font-bold text-green-800 mb-2">Étude gratuite</h4>
              <p className="text-green-700">
                Pour tout projet d'application web, je propose une étude gratuite de vos besoins
                pour vous donner un devis précis et adapté.
              </p>
              <p className="text-green-700">
                Une réponse vous sera envoyée par email ou WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;