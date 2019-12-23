import styled from 'styled-components';

export const StyledSearchInput = styled.div.attrs(() => ({
    className: "search-input",
}))`
    input {
        width: 0;
        height: 32px;
        border: none;
        border-bottom: 1px solid #d9d9d9;
        transition: all .2s ease-in;

        &:focus {
            width: 210px;
            margin-left: 12px;
            outline: none;
        }
    }
`;
