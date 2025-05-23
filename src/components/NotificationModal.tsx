import React from 'react';
import { X, Bell } from 'lucide-react';
import { requestNotificationPermission } from '../services/notifications';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubscribe = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      alert('Subscribed to daily safety notifications!');
      onClose();
    } else {
      alert('Please enable notifications in your browser settings to receive reminders.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Enable Notifications</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <Bell className="h-16 w-16 text-blue-600" />
          </div>
          <p className="text-gray-600 mb-4">
            Get daily AI-powered safety tips and reminders to help you maintain safe LPG
            practices. Our notifications will help you:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Remember regular safety checks</li>
            <li>Learn new safety practices</li>
            <li>Stay updated with emergency procedures</li>
            <li>Receive maintenance reminders</li>
            <li>Get timely refill reminders</li>
          </ul>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-700"
          >
            Maybe Later
          </button>
          <button
            onClick={handleSubscribe}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;