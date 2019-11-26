import styled from 'styled-components';
import { IStyledInputField } from '../../types/input';

const StyledInput = styled.div.attrs(({ required }: IStyledInputField) => ({
  required,
}))`
  position: relative;
  margin-top: 21px;

  &.error {
    label {
      color: red;

      &::after {
        display: none;
      }
    }

    .input-wrapper {
      &::before {
        width: 100%;
        background-color: red;
      }
    }
  }

  label {
    position: absolute;
    transform: translateY(-100%);

    &::after {
      content: ' *';
      display: ${ ({ required }) => required ? 'inline-block' : 'none' };
    }
  }

  input {
    padding: 6px 0 7px;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  @keyframes grow {
    from {
      height: 0;
      border-color: #000;
    }

    to {
      height: 2px;
      border-color: #000;
    }
  }

  @keyframes decrease {
    from {
      height: 2px;
    }

    to {
      height: 0;
    }
  }

  @keyframes expansion {
    from {
      left: 50%;
      width: 0;
    }

    to {
      left: 0;
      width: 100%;
    }
  }

  @keyframes compression {
    from {
      left: 0;
      width: 100%;
    }

    to {
      left: 50%;
      width: 0;
    }
  }

  .input-wrapper {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;
      display: block;
      width: 100%;
      height: 0;
      border-bottom: 1px solid #808080;
      background-color: black;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 100%;
      transform: translateY(-3px);
      display: block;
      width: 0;
      height: 3px;
      background-color: blue;
    }

    &.isUnderlinedHover {
      &::after {
        animation: grow .1s linear both;
      }
    }

    &.isNotUnderlinedHover {
      &::after {
        animation: decrease .1s linear both;
      }
    }

    &.isUnderlinedFocus {
      &::before {
        animation: expansion .2s linear both;
      }
    }

    &.isNotUnderlinedFocus {
      &::before {
        animation: compression .2s linear both;
      }
    }
  }
`

export default StyledInput;
