import { showMessage } from 'react-native-flash-message';

const defaultOptions = {
  duration: 3000,
  position: 'top',
  showIcon: true,
};

export function successNotification(message, options) {
  const mergedOptions = { ...defaultOptions, ...options };

  return showMessage({
    ...mergedOptions,
    message,
    type: 'success',
    icon: mergedOptions.showIcon ? 'success' : 'none',
  });
}

export function errorNotification(message, options) {
  const mergedOptions = { ...defaultOptions, ...options };

  return showMessage({
    ...mergedOptions,
    message,
    type: 'danger',
    icon: mergedOptions.showIcon ? 'danger' : 'none',
  });
}

export function warningNotification(message, options) {
  const mergedOptions = { ...defaultOptions, ...options };

  return showMessage({
    ...mergedOptions,
    message,
    type: 'warning',
    icon: mergedOptions.showIcon ? 'warning' : 'none',
  });
}

export function infoNotification(message, options) {
  const mergedOptions = { ...defaultOptions, ...options };

  return showMessage({
    ...mergedOptions,
    message,
    type: 'info',
    icon: mergedOptions.showIcon ? 'info' : 'none',
  });
}
