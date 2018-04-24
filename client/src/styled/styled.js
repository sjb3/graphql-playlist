import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e522db;
  font-family: 'Lobster';
  /* background-image: */
`;

export const Button = styled.button`
  /* background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'}; */

  font-size: 0.75em;
  font-family: 'Cute Font', cursive;
  margin: 1em;
  padding: 0.25em 0.35em;
  border: 0.5px solid #f4f113;
  border-radius: 3px;
  background-color: #eaf2f1;
  &:hover {
    color: #87f413;
    border: 3px solid #87f413;
    font-style: italic;
    /* background: grey; */
  }
  /* &:action {
    color: red;
  } */
`;