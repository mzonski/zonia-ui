import { css } from 'styled-components';

export const removeTextSearchElements = css`
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
    -webkit-appearance: none;
  }
`;

export const removeDateElements = css`
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;
