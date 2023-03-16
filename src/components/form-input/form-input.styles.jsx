import styled, { css } from "styled-components";
//Mixins and vars
const subColor = "grey";
const mainColor = "black";
const shrinkLabelStyles = css`
  top: -16px;
  font-size: 1rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.2rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  font-family: inherit;
  ${({shrink}) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.2rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  font-family: inherit;
  
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;