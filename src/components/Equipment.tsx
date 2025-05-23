import React from 'react';
import { PenTool as Tool, Shield, AlertCircle, Gauge, Wrench, Siren as Fire, ChevronFirst as FirstAid } from 'lucide-react';

const Equipment: React.FC = () => {
  const equipment = [
    {
      title: 'Gas Leak Detector',
      description: 'Electronic device that detects the presence of LPG in the air',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
      essential: true,
      maintenance: 'Replace batteries regularly and test monthly'
    },
    {
      title: 'Automatic Shut-off Valve',
      description: 'Advanced safety device that automatically stops gas flow in case of excessive leakage',
      image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?auto=format&fit=crop&w=1000&q=80',
      essential: true,
      maintenance: 'Annual professional inspection required'
    },
    {
      title: 'Flexible Gas Hose with Clamps',
      description: 'LPG-rated flexible hose with secure clamps for safe gas transmission',
      image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1000&q=80',
      essential: true,
      maintenance: 'Replace every 2 years or if wear detected'
    },
    {
      title: 'Fire Extinguisher',
      description: 'ABC type fire extinguisher suitable for gas fires',
      image: 'https://images.unsplash.com/photo-1596826743819-5ff50b5b8c81?auto=format&fit=crop&w=1000&q=80',
      essential: true,
      maintenance: 'Check pressure gauge monthly'
    },
    {
      title: 'Fire Blanket',
      description: 'Special fire-resistant blanket for smothering small kitchen fires safely',
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b6af8f4?auto=format&fit=crop&w=1000&q=80',
      essential: true,
      maintenance: 'Replace if used or damaged'
    },
    {
      title: 'First Aid Kit',
      description: 'Comprehensive first aid kit including specialized burn treatment supplies',
      image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?auto=format&fit=crop&w=1000&q=80',
      essential: true,
      maintenance: 'Check and replenish supplies every 6 months'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex items-center mb-4">
          <Shield className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Essential Safety Equipment</h2>
        </div>
        <p className="text-gray-600">
          Having the right safety equipment is crucial for preventing and managing LPG-related
          incidents. Here's the essential safety equipment every household should maintain:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              {item.essential && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Essential
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Tool className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center text-blue-700 text-sm mb-1">
                  <Wrench className="h-4 w-4 mr-1" />
                  <span className="font-medium">Maintenance:</span>
                </div>
                <p className="text-blue-600 text-sm">{item.maintenance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
            <AlertCircle className="h-6 w-6 mr-2" />
            Regular Inspections
          </h3>
          <ul className="space-y-2 text-yellow-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Check all equipment monthly for wear and damage</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Test gas detectors according to manufacturer guidelines</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Verify pressure readings on regulators and valves</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <Gauge className="h-6 w-6 mr-2" />
            Maintenance Schedule
          </h3>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Replace gas hoses every 2 years</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Service automatic shut-off valves annually</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Update first aid supplies every 6 months</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Equipment;