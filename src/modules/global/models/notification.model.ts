export type NotificationTypes = 'error' | 'success' | 'warning' | 'info';
export interface Notification {
  message: string;
  type: NotificationTypes;
}
