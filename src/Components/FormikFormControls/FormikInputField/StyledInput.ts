import styled from 'styled-components';
import colors from '../../../styles/common/colors';

const { black_1, grey_1, orange_1 } = colors;

const StyledInput = styled.div`
  position: relative;
  width: max-content;
  margin-top: 21px;

  &.error {
    .input-wrapper {
      &::before {
        width: 100%;
        background-color: red;
      }
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
      border-color: ${black_1};
    }

    to {
      height: 2px;
      border-color: ${black_1};
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
      border-bottom: 1px solid ${grey_1};
      background-color: ${black_1};
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
      background-color: ${orange_1};
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
