import React from 'react';
import StyledInput from './StyledInput';
import { IInputField, IOtherProps } from '../../../types/input';

const eventHandler = (e: any, removeClass: string, addClass: string) => {
  const inputWrapper = e.target.parentElement;
  inputWrapper.classList.remove(removeClass);
  inputWrapper.classList.add(addClass);
}

const FormikInputField = ({ label, field, form, ...props }: IInputField & IOtherProps ) => (
  <StyledInput>
    <label htmlFor={ field.name }>{ label }</label>
    <div className="input-wrapper">
      <input
          id={ field.name }
          type="text"
          { ...field }
          { ...props }
          onFocus={ (e) => eventHandler(e, "isNotUnderlinedFocus", "isUnderlinedFocus") }
          onBlur={ (e) => eventHandler(e, "isUnderlinedFocus", "isNotUnderlinedFocus") }
          onMouseEnter={ (e) => eventHandler(e, "isNotUnderlinedHover", "isUnderlinedHover") }
          onMouseLeave={ (e) => eventHandler(e, "isUnderlinedHover", "isNotUnderlinedHover") }
      />
    </div>
  </StyledInput>
)

export default FormikInputField;
