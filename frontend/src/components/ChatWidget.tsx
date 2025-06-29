import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'Akanni Johannes. Comment puis-je vous aider avec votre projet web ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    {
      keywords: ['prix', 'tarif', 'coût', 'combien'],
      response: "Mes tarifs commencent à 59€ pour un site vitrine basique. Le prix final dépend des options choisies (design personnalisé +20€, SEO +30€, etc.). Voulez-vous un devis personnalisé ?"
    },
    {
      keywords: ['délai', 'temps', 'livraison', 'quand'],
      response: "Les délais de livraison sont de 7-10 jours pour un site vitrine simple, et 10-15 jours avec options supplémentaires. Pour une application web, cela dépend de la complexité."
    },
    {
      keywords: ['service', 'que faites', 'proposez'],
      response: "Je propose : création de sites vitrine (dès 59€), applications web sur mesure (devis gratuit), maintenance (19€/mois), et e-commerce. Quel type de projet vous intéresse ?"
    },
    {
      keywords: ['contact', 'rendez-vous', 'parler', 'discuter'],
      response: "Parfait ! Vous pouvez me contacter par email à akanni.johannes@email.com ou par téléphone au 06 12 34 56 78. Je peux aussi vous rediriger vers le formulaire de contact pour un devis détaillé."
    },
    {
      keywords: ['maintenance', 'mise à jour', 'sécurité'],
      response: "Mon service de maintenance à 19€/mois inclut : mises à jour régulières, sauvegardes automatiques, support technique et monitoring sécurité. C'est essentiel pour garder votre site performant !"
    },
    {
      keywords: ['portfolio', 'exemple', 'réalisation'],
      response: "J'ai réalisé plus de 50 sites : restaurants, cabinets d'avocats, e-commerce, applications RH... Vous pouvez voir mes réalisations dans la section Portfolio du site !"
    },
    {
      keywords: ['bonjour', 'salut', 'hello', 'bonsoir'],
      response: "Bonjour ! Ravi de vous rencontrer. Je suis là pour répondre à toutes vos questions sur mes services de développement web. Que puis-je faire pour vous ?"
    },
    {
      keywords: ['merci', 'parfait', 'super', 'génial'],
      response: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous accompagner dans votre projet web !"
    }
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of botResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
    return "Merci pour votre message ! Pour une réponse personnalisée à votre question, je vous invite à utiliser le formulaire de contact ou à m'appeler directement. Je serai ravi de discuter de votre projet en détail !";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-180' 
            : 'bg-orange-500 hover:bg-orange-600 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-semibold">Assistant Akanni</h3>
              <p className="text-xs text-orange-100">En ligne</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-orange-500 text-white'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.isBot && (
                    <Bot size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  {!message.isBot && (
                    <User size={16} className="text-orange-100 mt-0.5 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Bot size={16} className="text-orange-500" />
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;