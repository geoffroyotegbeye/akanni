import React, { useState } from 'react';
import { FeaturesSection } from './sections/FeaturesSection';
import { HeroSection } from './sections/HeroSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FormSection } from './sections/FormSection';

const initialFormData = {
  fullName: '',
  email: '',
  whatsapp: '',
  age: '',
  city: '',
  hasCodeExperience: '',
  hasComputer: '',
  hasInternet: '',
  motivation: '',
  hoursPerWeek: '',
  howDidYouKnow: '',
};

const Formation: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: keyof typeof initialFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    // TODO: envoyer les données (API, email, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialFormData);
      alert('Candidature envoyée !');
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FormSection
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Formation;
