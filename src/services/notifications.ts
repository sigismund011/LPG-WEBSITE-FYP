import { addDays, isBefore, parseISO } from 'date-fns';

export const scheduleRefillReminder = (refillDate: string) => {
  if (!('Notification' in window)) {
    console.error('This browser does not support notifications');
    return;
  }

  const reminderDate = addDays(parseISO(refillDate), -3);
  const now = new Date();

  if (isBefore(reminderDate, now)) {
    return; // Don't schedule if reminder date is in the past
  }

  const timeUntilReminder = reminderDate.getTime() - now.getTime();

  setTimeout(() => {
    if (Notification.permission === 'granted') {
      new Notification('LPG Refill Reminder', {
        body: `Your gas cylinder will need a refill in 3 days. Please schedule your refill to avoid running out.`,
        icon: '/vite.svg'
      });
    }
  }, timeUntilReminder);
};

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
};