import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Star, Users, Shield, Brain, Camera, MessageSquare } from 'lucide-react';

const ProgressPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "User Interface Enhancement",
      icon: Star,
      achievements: [
        "Responsive design for all screen sizes",
        "Intuitive navigation system",
        "Modern and clean visual aesthetic",
        "Consistent branding throughout",
        "Optimized mobile experience"
      ],
      metrics: {
        completion: 100,
        impact: "Improved user experience across all devices"
      }
    },
    {
      title: "Safety Features Implementation",
      icon: Shield,
      achievements: [
        "Interactive safety guidelines",
        "Emergency response protocols",
        "Equipment maintenance guides",
        "Safety checklists and reminders",
        "Real-time gas calculator"
      ],
      metrics: {
        completion: 100,
        impact: "Comprehensive safety resource hub"
      }
    },
    {
      title: "AI Integration",
      icon: Brain,
      achievements: [
        "AI Safety Assistant implementation",
        "Smart safety recommendations",
        "Automated maintenance reminders",
        "Personalized safety tips",
        "24/7 virtual support"
      ],
      metrics: {
        completion: 100,
        impact: "Enhanced user guidance and support"
      }
    },
    {
      title: "AR Capabilities",
      icon: Camera,
      achievements: [
        "AR safety demonstrations",
        "Interactive equipment guides",
        "Virtual safety training",
        "QR code integration",
        "Real-time visualization"
      ],
      metrics: {
        completion: 100,
        impact: "Innovative safety learning experience"
      }
    },
    {
      title: "Community Features",
      icon: Users,
      achievements: [
        "Interactive forum implementation",
        "Real-time likes and comments",
        "User engagement features",
        "Knowledge sharing platform",
        "Expert interaction capability"
      ],
      metrics: {
        completion: 100,
        impact: "Strong community engagement platform"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Development Progress</h2>
        <p className="text-gray-600">
          Track the implementation progress of key features and improvements in the LPG Safety website.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Slide Content */}
          <div className="p-8">
            <div className="flex items-center mb-6">
              {React.createElement(slides[currentSlide].icon, {
                className: "h-12 w-12 text-blue-600 mr-4"
              })}
              <h3 className="text-2xl font-bold text-gray-800">
                {slides[currentSlide].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {slides[currentSlide].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-4">Implementation Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-blue-600 mb-2">Completion Status</p>
                      <div className="w-full bg-blue-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${slides[currentSlide].metrics.completion}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-blue-600 mt-1">
                        {slides[currentSlide].metrics.completion}% Complete
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-600 mb-2">Impact Assessment</p>
                      <p className="text-blue-800">
                        {slides[currentSlide].metrics.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center pb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-1 w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPresentation;