import { notification } from "antd";

export const productAddSuccess = () => {
  notification.open({
    message: "Success",
    
    description: "Your new product has been added"
  });
};

export const productAddError = () => {
  notification.open({
    message: "Error",
    description: "Some error occurred while adding the product"
  });
};

