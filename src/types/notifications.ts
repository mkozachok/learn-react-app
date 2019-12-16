interface INotification {
  message: string,
  description: string,
}

export interface INotifications {
  productCreationSuccess: INotification,
  productCreationError: INotification,
  productDeletionSuccess: INotification,
  productDeletionError: INotification,
  productUpdateSuccess: INotification,
  productUpdateError: INotification,
}
