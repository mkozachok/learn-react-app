import { IProductNotifications } from "../types/notifications";

const notifications: IProductNotifications = {
  productCreationSuccess: {
    message: "Success",
    description: "The product was created",
  },
  productCreationError: {
    message: "Error",
    description: "Something went wrong",
  },
  productDeletionSuccess: {
    message: "Success",
    description: "The product was deleted",
  },
  productDeletionError: {
    message: "Error",
    description: "Something went wrong",
  },
  productUpdateSuccess: {
    message: "Success",
    description: "The product was updated",
  },
  productUpdateError: {
    message: "Error",
    description: "Something went wrong",
  },
}

export default notifications;
