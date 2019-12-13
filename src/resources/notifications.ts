import { INotifications } from "../types/notifications";

const notifications: INotifications = {
  success: {
    message: "Success",
    description: "The product was created",
  },
  error: {
    message: "Error",
    description: "Something went wrong",
  }
}

export default notifications;
