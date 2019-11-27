import React from 'react';
import StyledInput from './StyledInput';
import { IInputField } from '../../types/input';

const eventHandler = (e: any, removeClass: string, addClass: string) => {
  const inputWrapper = e.target.parentElement;
  inputWrapper.classList.remove(removeClass);
  inputWrapper.classList.add(addClass);
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    required?: boolean
  }
}

const InputField = ({ id, required, placeholder, labelText, error }: IInputField) => (
  <StyledInput required={ required }>
    <label htmlFor={ id }>{ error ? "Error" : labelText }</label>
    <div className="input-wrapper">
      <input
          type="text"
          id={ id }
          autoComplete="off"
          placeholder={ placeholder }
          onFocus={ (e) => eventHandler(e, "isNotUnderlinedFocus", "isUnderlinedFocus") }
          onBlur={ (e) => eventHandler(e, "isUnderlinedFocus", "isNotUnderlinedFocus") }
          onMouseEnter={ (e) => eventHandler(e, "isNotUnderlinedHover", "isUnderlinedHover") }
          onMouseLeave={ (e) => eventHandler(e, "isUnderlinedHover", "isNotUnderlinedHover") }
      />
    </div>
  </StyledInput>
)

export default InputField;
