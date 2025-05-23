import React from 'react';
import { CheckCircle, Package, Truck, AlertTriangle, Flame } from 'lucide-react';

const SafetyTips: React.FC = () => {
  const tips = [
    {
      title: 'Proper Storage',
      description: 'Store cylinders upright on flat surfaces, in well-ventilated areas, away from heat and electrical sources. Keep 1.5m distance from electrical appliances.',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b6af8f4?auto=format&fit=crop&w=1000&q=80',
      guidelines: [
        'Store cylinders upright on flat, stable surfaces',
        'Keep in well-ventilated areas away from sunlight',
        'Maintain 1.5m distance from electrical appliances',
        'Avoid storage in confined spaces like basements'
      ]
    },
    {
      title: 'Safe Handling & Transportation',
      description: 'Handle cylinders with care, maintain upright position during transport, and ensure proper valve closure when not in use.',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1000&q=80',
      guidelines: [
        'Always close cylinder valve when not in use',
        'Never drop, roll, or drag cylinders',
        'Keep cylinders upright during transportation',
        'Avoid long-term storage in vehicle trunks'
      ]
    },
    {
      title: 'Leak Detection',
      description: 'Regular inspection of connections using soap solution. Never use flames for leak detection. Ensure proper ventilation if leak detected.',
      icon: AlertTriangle,
      image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?auto=format&fit=crop&w=1000&q=80',
      guidelines: [
        'Inspect hoses and regulators regularly',
        'Use soap solution for leak detection',
        'Never use flames to check for leaks',
        'Ventilate area immediately if leak detected'
      ]
    },
    {
      title: 'Safe Usage Practices',
      description: 'Use approved appliances, ensure professional installation, and follow proper operating procedures.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      guidelines: [
        'Use only LPG-compatible appliances',
        'Ensure professional installation',
        'Keep flammables away from gas appliances',
        'Never leave cooking unattended'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Essential LPG Safety Guidelines</h2>
        <p className="text-blue-600">
          Follow these comprehensive safety guidelines to ensure safe handling and usage of LPG in your home or workplace.
        </p>
      </div>

      <div className="space-y-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-64 w-full md:w-64 object-cover"
                  src={tip.image}
                  alt={tip.title}
                />
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center mb-4">
                  <tip.icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{tip.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Guidelines:</h4>
                  <ul className="space-y-2">
                    {tip.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-red-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-red-800 mb-3">
          Emergency Response
        </h3>
        <div className="space-y-3 text-red-700">
          <p className="font-medium">If you detect a gas leak:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Turn off the gas supply immediately</li>
            <li>Open all doors and windows for ventilation</li>
            <li>Do not operate electrical switches or appliances</li>
            <li>Evacuate the area and call emergency services</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;