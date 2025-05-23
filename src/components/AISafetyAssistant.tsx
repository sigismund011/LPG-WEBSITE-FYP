import React, { useState } from 'react';
import { MessageSquare, Send, Bot, Lightbulb, AlertTriangle } from 'lucide-react';

const AISafetyAssistant: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'ai'; message: string }>>([
    { type: 'ai', message: 'Hello! I\'m your LPG Safety Assistant. How can I help you today?' }
  ]);

  const commonQuestions = [
    "How do I check for gas leaks?",
    "What should I do if I smell gas?",
    "How often should I replace my gas hose?",
    "What are the signs of a faulty regulator?"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { type: 'user', message }]);

    // Simulate AI response based on keywords
    let response = '';
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes('leak') || lowercaseMessage.includes('smell')) {
      response = "If you smell gas or suspect a leak: 1. Turn off the gas supply immediately 2. Open windows and doors 3. Don't use electrical switches or phones 4. Evacuate the area 5. Call emergency services from a safe location.";
    } else if (lowercaseMessage.includes('hose') || lowercaseMessage.includes('pipe')) {
      response = "LPG hoses should be replaced every 2 years or immediately if you notice any cracks, wear, or damage. Always use certified LPG hoses and ensure proper installation with hose clamps.";
    } else if (lowercaseMessage.includes('regulator')) {
      response = "Signs of a faulty regulator include: irregular flame, hissing sounds, gas smell, or frost formation. Replace regulators every 5 years or if you notice any issues.";
    } else {
      response = "I understand you have a question about LPG safety. For specific technical issues, please consult a qualified technician. For emergencies, call your local emergency services immediately.";
    }

    // Add AI response after a short delay
    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'ai', message: response }]);
    }, 500);

    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Bot className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">AI Safety Assistant</h2>
        </div>
        <p className="text-gray-600">
          Get instant answers to your LPG safety questions. Our AI assistant is here to help
          24/7 with safety guidelines, maintenance tips, and emergency procedures.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Chat Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[500px] flex flex-col">
              {/* Chat History */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        chat.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {chat.message}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your safety question here..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="space-y-6">
          {/* Common Questions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Common Questions</h3>
            </div>
            <div className="space-y-2">
              {commonQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(question)}
                  className="w-full text-left p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Emergency Notice</h3>
            </div>
            <p className="text-red-600">
              For immediate emergency assistance, please call emergency services at 911 or your
              local gas emergency number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISafetyAssistant;