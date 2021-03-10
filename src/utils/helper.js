import AsyncStorage from '@react-native-async-storage/async-storage';

// Generate unique random ids
// Idea: https://gist.github.com/gordonbrander/2230317
export const generateID = () => '_' + Math.random().toString(36).substr(2, 9);

// Notifications logic

const KEY = 'flashcards-notifications';

export const createNotification = () =>
  AsyncStorage.getItem(KEY)
    .then(data => JSON.parse(data))
    .then(data => {
      if (!data) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            // Set notification time
            let time = new Date();
            time.setDate(time.getDate() + 1);
            time.setHours(11);
            time.setMinutes(15);

            const notification = {
              title: 'Take a quiz NOW!',
              body: 'Try to attempt at least one quiz daily.',
              ios: { sound: true },
              android: { sound: true, vibrate: true }
            };

            Notifications.scheduleLocalNotificationAsync(notification, {
              time,
              repeat: 'day'
            });

            AsyncStorage.setItem(KEY, JSON.stringify(true));
          }
        });
      }
    });

export const clearNotification = () =>
  AsyncStorage.removeItem(KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
