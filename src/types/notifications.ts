interface IProductNotification {
  message: string,
  description: string,
}

export interface IProductNotifications {
  productCreationSuccess: IProductNotification,
  productCreationError: IProductNotification,
  productDeletionSuccess: IProductNotification,
  productDeletionError: IProductNotification,
  productUpdateSuccess: IProductNotification,
  productUpdateError: IProductNotification,
}
