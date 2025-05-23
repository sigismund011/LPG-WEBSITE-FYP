import React from 'react';
import { AlertTriangle, Phone, Wind, DoorClosed, X, Siren as Fire, ShieldAlert, CheckCircle2 } from 'lucide-react';

const EmergencyGuide: React.FC = () => {
  const emergencySteps = [
    {
      icon: DoorClosed,
      title: 'Turn Off the Gas Supply',
      description: 'Close the cylinder valve or the main gas supply to stop further leakage.',
      critical: true,
    },
    {
      icon: Wind,
      title: 'Ventilate the Area',
      description: 'Open all doors and windows to allow gas to escape. Do not use fans or electrical appliances for ventilation.',
      critical: true,
    },
    {
      icon: X,
      title: 'Avoid Ignition Sources',
      description: 'Do not use electrical switches, lights, mobile phones, matches, lighters, or any electronic devices.',
      warnings: [
        'No electrical switches or lights',
        'No mobile phones or electronic devices',
        'No matches or lighters',
        'No doorbells or landline phones'
      ],
      critical: true,
    },
    {
      icon: AlertTriangle,
      title: 'Evacuate Immediately',
      description: 'Ensure everyone leaves the area to a safe distance. Warn neighbors if the leak is severe.',
      critical: true,
    },
    {
      icon: Phone,
      title: 'Call Emergency Services',
      description: 'Contact emergency services from a safe location. Follow your emergency response plan if in a commercial setting.',
      contacts: [
        { name: 'Fire Department', number: '911' },
        { name: 'Gas Emergency', number: '1-800-GAS-LEAK' }
      ]
    },
    {
      icon: Fire,
      title: 'In Case of Fire',
      description: 'Never use water on a gas fire! Use a CO₂ fire extinguisher or Auto Fire Extinguisher Ball from a safe distance.',
      warnings: [
        'Do NOT use water on gas fires',
        'Use CO₂ fire extinguisher only',
        'Deploy fire extinguisher ball from safe distance',
        'If unsafe to control, evacuate immediately'
      ]
    },
    {
      icon: ShieldAlert,
      title: 'Professional Inspection',
      description: 'Have a qualified professional inspect the system before resuming gas usage.',
      checklist: [
        'Professional system inspection',
        'Leak test with soap solution',
        'Safety certification',
        'Appliance inspection'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-red-700">Emergency Response Guide</h2>
        </div>
        <p className="text-red-600 font-medium">
          If you smell gas or suspect a leak, follow these critical steps immediately.
          Every second counts in preventing potential accidents.
        </p>
      </div>

      <div className="space-y-6">
        {emergencySteps.map((step, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-lg p-6 ${
              step.critical ? 'border-l-4 border-red-500' : ''
            }`}
          >
            <div className="flex items-center mb-4">
              <step.icon className={`h-8 w-8 ${
                step.critical ? 'text-red-500' : 'text-blue-600'
              } mr-3`} />
              <h3 className="text-xl font-semibold text-gray-800">
                {`${index + 1}. ${step.title}`}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-4">{step.description}</p>

            {step.warnings && (
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-red-700 mb-2">⚠️ Critical Warnings:</h4>
                <ul className="space-y-2">
                  {step.warnings.map((warning, idx) => (
                    <li key={idx} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-red-600">{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.contacts && (
              <div className="grid md:grid-cols-2 gap-4">
                {step.contacts.map((contact, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">{contact.name}</h4>
                    <p className="text-2xl font-bold text-blue-600">{contact.number}</p>
                  </div>
                ))}
              </div>
            )}

            {step.checklist && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Safety Checklist:</h4>
                <ul className="space-y-2">
                  {step.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-green-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2" />
          Remember
        </h3>
        <p className="text-yellow-700">
          Your safety is the top priority. Don't hesitate to evacuate and call emergency
          services if you're unsure about the severity of the situation. It's better to be
          cautious than to risk lives and property.
        </p>
      </div>
    </div>
  );
};

export default EmergencyGuide;