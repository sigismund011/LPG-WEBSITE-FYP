import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Flame, Shield, PenTool as Tool, Calendar, RefreshCw } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  frequency: string;
  completed: boolean;
}

const SafetyChecklist: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    // Daily Checks
    {
      id: 'daily-1',
      text: 'Check for gas smell around cylinder and connections',
      category: 'Daily',
      frequency: 'Every day before use',
      completed: false
    },
    {
      id: 'daily-2',
      text: 'Verify proper ventilation in gas appliance areas',
      category: 'Daily',
      frequency: 'Every day',
      completed: false
    },
    {
      id: 'daily-3',
      text: 'Ensure gas knobs are fully closed when not in use',
      category: 'Daily',
      frequency: 'After each use',
      completed: false
    },
    // Weekly Checks
    {
      id: 'weekly-1',
      text: 'Inspect gas hose for cracks or damage',
      category: 'Weekly',
      frequency: 'Every week',
      completed: false
    },
    {
      id: 'weekly-2',
      text: 'Test gas leak detector functionality',
      category: 'Weekly',
      frequency: 'Every week',
      completed: false
    },
    {
      id: 'weekly-3',
      text: 'Check regulator condition and operation',
      category: 'Weekly',
      frequency: 'Every week',
      completed: false
    },
    // Monthly Checks
    {
      id: 'monthly-1',
      text: 'Conduct soap solution leak test on all connections',
      category: 'Monthly',
      frequency: 'Every month',
      completed: false
    },
    {
      id: 'monthly-2',
      text: 'Inspect cylinder for rust or damage',
      category: 'Monthly',
      frequency: 'Every month',
      completed: false
    },
    {
      id: 'monthly-3',
      text: 'Check fire extinguisher pressure gauge',
      category: 'Monthly',
      frequency: 'Every month',
      completed: false
    },
    // Quarterly Checks
    {
      id: 'quarterly-1',
      text: 'Professional inspection of gas system',
      category: 'Quarterly',
      frequency: 'Every 3 months',
      completed: false
    },
    {
      id: 'quarterly-2',
      text: 'Replace batteries in gas detectors',
      category: 'Quarterly',
      frequency: 'Every 3 months',
      completed: false
    },
    {
      id: 'quarterly-3',
      text: 'Update emergency contact information',
      category: 'Quarterly',
      frequency: 'Every 3 months',
      completed: false
    }
  ]);

  const [activeCategory, setActiveCategory] = useState<string>('Daily');

  const categories = ['Daily', 'Weekly', 'Monthly', 'Quarterly'];

  const toggleItem = (id: string) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const resetChecklist = () => {
    setChecklist(checklist.map(item => ({ ...item, completed: false })));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Daily':
        return Flame;
      case 'Weekly':
        return Shield;
      case 'Monthly':
        return Tool;
      case 'Quarterly':
        return Calendar;
      default:
        return CheckCircle2;
    }
  };

  const getCategoryProgress = (category: string) => {
    const categoryItems = checklist.filter(item => item.category === category);
    const completedItems = categoryItems.filter(item => item.completed);
    return Math.round((completedItems.length / categoryItems.length) * 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CheckCircle2 className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Safety Checklist</h2>
          </div>
          <button
            onClick={resetChecklist}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Reset All
          </button>
        </div>

        {/* Category Progress */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map(category => {
            const Icon = getCategoryIcon(category);
            const progress = getCategoryProgress(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-4 rounded-xl transition ${
                  activeCategory === category
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center mb-2">
                  <Icon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-800">{category}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{progress}% Complete</p>
              </button>
            );
          })}
        </div>

        {/* Checklist Items */}
        <div className="space-y-4">
          {checklist
            .filter(item => item.category === activeCategory)
            .map(item => (
              <div
                key={item.id}
                className={`p-4 rounded-lg transition ${
                  item.completed
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        item.completed
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-400'
                      }`}
                    >
                      {item.completed && (
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className={`font-medium ${
                      item.completed ? 'text-green-800' : 'text-gray-800'
                    }`}>
                      {item.text}
                    </p>
                    <p className={`text-sm ${
                      item.completed ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      Frequency: {item.frequency}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="bg-yellow-50 p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
          <h3 className="text-lg font-semibold text-yellow-800">Important Safety Tips</h3>
        </div>
        <ul className="space-y-2 text-yellow-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Complete all checks according to their recommended frequency</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>If you detect any issues, contact a qualified professional immediately</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Keep a record of all inspections and maintenance work</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Don't skip or delay safety checks - they're crucial for preventing accidents</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SafetyChecklist;