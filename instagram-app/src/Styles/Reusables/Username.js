import styled, { css } from 'styled-components';

const Username = styled.header`
  color: black;
  font-size: 2rem;
  &:hover {
  }
  ${props =>
    props.bolder &&
    css`
      font-weight: 700;
    `};
  ${props =>
    props.inline &&
    css`
      font-size: 1.4rem;
      display: inline;
      font-weight: 500;
    `}
`;

export default Username;
