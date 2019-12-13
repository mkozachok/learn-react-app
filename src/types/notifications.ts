interface INotification {
  message: string,
  description: string,
}

export interface INotifications {
  success: INotification,
  error: INotification,
}
