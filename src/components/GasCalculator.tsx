import React, { useState } from 'react';
import { Calculator, Calendar, Clock } from 'lucide-react';
import { scheduleRefillReminder } from '../services/notifications';

interface UsagePattern {
  type: string;
  dailyUsageHours: number;
  consumptionRate: number; // kg per hour
}

const usagePatterns: Record<string, UsagePattern> = {
  'small-household': { 
    type: 'Small Household (1-2 people)', 
    dailyUsageHours: 2.5, 
    consumptionRate: 0.22 // Lower cooking frequency, mainly for basic meals
  },
  'medium-household': { 
    type: 'Medium Household (3-5 people)', 
    dailyUsageHours: 3.5, 
    consumptionRate: 0.28 // Regular cooking, multiple meals
  },
  'large-household': { 
    type: 'Large Household (6+ people)', 
    dailyUsageHours: 4.5, 
    consumptionRate: 0.35 // Frequent cooking, larger portions
  },
  'small-business': { 
    type: 'Small Food Business', 
    dailyUsageHours: 8, 
    consumptionRate: 0.45 // Commercial cooking, continuous usage
  },
  'chop-bar': { 
    type: 'Chop Bar/Restaurant', 
    dailyUsageHours: 12, 
    consumptionRate: 0.55 // Heavy commercial usage
  }
};

const GasCalculator: React.FC = () => {
  const [cylinderCapacity, setCylinderCapacity] = useState<number>(14.5); // Default to most common size
  const [fillDate, setFillDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [usageType, setUsageType] = useState<string>('medium-household');
  const [result, setResult] = useState<{ days: number; nextRefillDate: string; dailyUsage: number } | null>(null);

  const calculateUsage = () => {
    const pattern = usagePatterns[usageType];
    const dailyConsumption = pattern.dailyUsageHours * pattern.consumptionRate;
    const daysRemaining = Math.floor(cylinderCapacity / dailyConsumption);
    
    const nextDate = new Date(fillDate);
    nextDate.setDate(nextDate.getDate() + daysRemaining);
    const nextRefillDate = nextDate.toISOString().split('T')[0];

    setResult({
      days: daysRemaining,
      nextRefillDate,
      dailyUsage: Number(dailyConsumption.toFixed(2))
    });

    // Schedule reminder notification
    scheduleRefillReminder(nextRefillDate);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex items-center mb-4">
          <Calculator className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Gas Usage Calculator</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Calculate your LPG cylinder duration based on Ghanaian household and business usage patterns.
          We'll help you plan your next refill and send timely reminders.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cylinder Size (kg)
              </label>
              <input
                type="number"
                value={cylinderCapacity}
                onChange={(e) => setCylinderCapacity(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
                step="0.1"
                placeholder="Enter cylinder size in kg"
              />
              <p className="text-sm text-gray-500 mt-1">Common sizes: 3kg, 6kg, 14.5kg, 18kg</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Fill Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={fillDate}
                  onChange={(e) => setFillDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usage Type
              </label>
              <select
                value={usageType}
                onChange={(e) => setUsageType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Object.entries(usagePatterns).map(([key, pattern]) => (
                  <option key={key} value={key}>
                    {pattern.type}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculateUsage}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Calculate Usage
            </button>
          </div>

          {result && (
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-800">Usage Estimate</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-blue-600">Daily Usage</p>
                  <p className="text-2xl font-bold text-blue-800">{result.dailyUsage} kg/day</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600">Estimated Days Until Empty</p>
                  <p className="text-2xl font-bold text-blue-800">{result.days} days</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600">Recommended Refill Date</p>
                  <p className="text-2xl font-bold text-blue-800">{result.nextRefillDate}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-yellow-800 font-medium">Safety Tips:</p>
                  <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                    <li>• Plan to refill when cylinder is 20% full</li>
                    <li>• Keep a backup cylinder if possible</li>
                    <li>• Check for price updates before refill</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GasCalculator;