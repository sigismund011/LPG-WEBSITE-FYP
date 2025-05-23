import React, { useState } from 'react';
import { Camera, Play, Info, CheckCircle2, Smartphone, QrCode } from 'lucide-react';

const ARSafetyDemo: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const demoScenarios = [
    {
      id: 'leak-detection',
      title: 'Gas Leak Detection & Response',
      description: 'Learn how to identify and respond to gas leaks safely using AR visualization.',
      steps: [
        'Identifying gas leak signs',
        'Using leak detection tools',
        'Emergency shutdown procedure',
        'Evacuation protocol'
      ],
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=lpgsafety-leak-demo'
    },
    {
      id: 'cylinder-replacement',
      title: 'Safe Cylinder Replacement',
      description: 'Step-by-step guide for safely replacing LPG cylinders.',
      steps: [
        'Pre-replacement safety checks',
        'Proper cylinder disconnection',
        'New cylinder inspection',
        'Safe connection procedure'
      ],
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=lpgsafety-cylinder-demo'
    },
    {
      id: 'emergency-response',
      title: 'Emergency Response Simulation',
      description: 'Practice emergency response procedures in various scenarios.',
      steps: [
        'Fire emergency response',
        'Gas leak emergency',
        'Equipment failure',
        'Evacuation procedures'
      ],
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=lpgsafety-emergency-demo'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Camera className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">AR Safety Demonstrations</h2>
        </div>
        <p className="text-gray-600">
          Experience interactive safety procedures through augmented reality. Use your
          smartphone to scan the QR codes and follow along with our virtual demonstrations.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
          <Info className="h-5 w-5 mr-2" />
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <Smartphone className="h-12 w-12 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">1. Scan QR Code</h4>
            <p className="text-gray-600">Use your smartphone to scan the QR code for your chosen demonstration</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Camera className="h-12 w-12 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">2. Point Camera</h4>
            <p className="text-gray-600">Point your camera at a flat surface to begin the AR experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Play className="h-12 w-12 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">3. Follow Along</h4>
            <p className="text-gray-600">Follow the interactive demonstrations and practice safety procedures</p>
          </div>
        </div>
      </div>

      {/* Demo Scenarios */}
      <div className="grid md:grid-cols-2 gap-6">
        {demoScenarios.map(demo => (
          <div
            key={demo.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden ${
              selectedDemo === demo.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {demo.title}
              </h3>
              <p className="text-gray-600 mb-4">{demo.description}</p>
              <div className="space-y-2 mb-4">
                {demo.steps.map((step, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedDemo(demo.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Demo
              </button>
            </div>

            {selectedDemo === demo.id && (
              <div className="p-6 bg-gray-50 border-t">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Scan to Begin</h4>
                  <QrCode className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex justify-center">
                  <img
                    src={demo.qrCode}
                    alt={`QR Code for ${demo.title}`}
                    className="w-48 h-48"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Scan this QR code with your smartphone to start the AR demonstration
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Requirements Notice */}
      <div className="mt-8 bg-yellow-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
          System Requirements
        </h3>
        <ul className="space-y-2 text-yellow-700">
          <li>• Smartphone with AR capabilities (iOS 12+ or Android 8.0+)</li>
          <li>• Camera access enabled</li>
          <li>• Internet connection</li>
          <li>• Well-lit environment for optimal AR experience</li>
        </ul>
      </div>
    </div>
  );
};

export default ARSafetyDemo;