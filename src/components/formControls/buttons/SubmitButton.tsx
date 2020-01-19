import React from "react";
import { StyledButton } from "./styled";

export const SubmitButton = (props: any) => {
  return (
    <StyledButton htmlType="submit" type={props.btnType}>
      {props.text}
    </StyledButton>
  );
};
