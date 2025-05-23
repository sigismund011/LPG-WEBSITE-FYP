import React, { useState } from 'react';
import { Home, CheckCircle, AlertTriangle, PenTool as Tool, Calculator, Notebook, Gamepad, Newspaper, Users, Camera, Shield, BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, Menu, X, Presentation as PresentationScreen } from 'lucide-react';
import CommunityForum from './components/CommunityForum';
import ARSafetyDemo from './components/ARSafetyDemo';
import SafetyTips from './components/SafetyTips';
import EmergencyGuide from './components/EmergencyGuide';
import Equipment from './components/Equipment';
import GasCalculator from './components/GasCalculator';
import SafetyChecklist from './components/SafetyChecklist';
import AISafetyAssistant from './components/AISafetyAssistant';
import SafetyQuiz from './components/SafetyQuiz';
import SafetyNews from './components/SafetyNews';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', icon: Home, text: 'Home' },
    { id: 'safety', icon: CheckCircle, text: 'Safety Tips' },
    { id: 'emergency', icon: AlertTriangle, text: 'Emergency Guide' },
    { id: 'equipment', icon: Tool, text: 'Safety Equipment' },
    { id: 'calculator', icon: Calculator, text: 'Gas Calculator' },
    { id: 'checklist', icon: CheckCircle, text: 'Safety Checklist' },
    { id: 'ai-assistant', icon: Notebook, text: 'AI Assistant' },
    { id: 'quiz', icon: Gamepad, text: 'Safety Quiz' },
    { id: 'news', icon: Newspaper, text: 'Safety News' },
    { id: 'community', icon: Users, text: 'Community' },
    { id: 'ar-demo', icon: Camera, text: 'AR Demo' }
  ];

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Safety Guidelines",
      description: "Access detailed safety protocols and best practices for LPG handling and storage.",
      action: "safety"
    },
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engage with our AI assistant and take quizzes to enhance your safety knowledge.",
      action: "ai-assistant"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our community forum to share experiences and get expert advice.",
      action: "community"
    },
    {
      icon: Camera,
      title: "AR Safety Demonstrations",
      description: "Experience safety procedures through augmented reality technology.",
      action: "ar-demo"
    }
  ];

  const renderHomepage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Your Safety is Our Priority</h1>
          <p className="text-xl mb-8">
            Discover comprehensive LPG safety resources, interactive guides, and expert support
            to ensure safe handling and usage in your environment.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveTab('safety')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Get Started
            </button>
            <button 
              onClick={() => setActiveTab('emergency')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Emergency Guide
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Comprehensive Safety Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(feature.action)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-left w-full"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Essential Safety Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety Checklist",
                description: "Step-by-step guide for regular safety inspections",
                action: "checklist",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI Safety Assistant",
                description: "Get instant answers to your safety questions",
                action: "ai-assistant",
                image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Emergency Guide",
                description: "Quick reference for emergency situations",
                action: "emergency",
                image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button
                    onClick={() => setActiveTab(resource.action)}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Access Now <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <div className="ml-2">
                <h1 className="text-xl font-bold text-gray-800">LPG Safety</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Your Safety Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-3 px-2 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2 pb-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.32))]">
        {activeTab === 'home' ? (
          renderHomepage()
        ) : (
          <div className="max-w-7xl mx-auto py-6 px-4">
            {activeTab === 'safety' && <SafetyTips />}
            {activeTab === 'emergency' && <EmergencyGuide />}
            {activeTab === 'equipment' && <Equipment />}
            {activeTab === 'calculator' && <GasCalculator />}
            {activeTab === 'checklist' && <SafetyChecklist />}
            {activeTab === 'ai-assistant' && <AISafetyAssistant />}
            {activeTab === 'quiz' && <SafetyQuiz />}
            {activeTab === 'news' && <SafetyNews />}
            {activeTab === 'community' && <CommunityForum />}
            {activeTab === 'ar-demo' && <ARSafetyDemo />}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">LPG Safety</span>
              </div>
              <p className="text-gray-400">
                Your trusted resource for LPG safety information and guidelines.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Safety Tips', 'Emergency Guide', 'Equipment', 'Community'].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-SAFETY</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@lpgsafety.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Safety Street, 12345</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="hover:text-white transition"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LPG Safety Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;