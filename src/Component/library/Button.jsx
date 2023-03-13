import styled, { css } from "styled-components";
import { space } from "studio-props-system";

export const Button = styled.button`  
border:none;
font-size: 14px;
font-weight: 400;
cursor: pointer;
display: inline-block;
border-radius: ${p => {
    if (p.round) return '0.75rem'
    else if (p.circle) return '200rem'
    return 'none'
}};
padding: ${p => {
  if (p.sm) return `6px 12px`
    else if (p.med) return `7px 18px`
    else if (p.lg) return `8px 24px`
    else if (p.icon) return `4px 5px 0px 5px`
    return `none`
  }}; 

${p => {
  if (p.primary) {
    return css`
         background-color:#0288D1;
         color:#E0E0E0;
         border: none;
          :hover{
            transition: ease-in 450ms;
            transition: ease-out 300ms;
            background-color:rgba(2, 137, 209, 0.8);
         }
        `;}
  
  else if (p.danger) {
    return css`
         background-color:#DD2C00;
         color:#E0E0E0;
         border: none;
           :hover{
            transition: ease-in 450ms;
            transition: ease-out 300ms;
            background-color:rgba(221, 44, 0, 0.8);
         }
    `;}
  
  else if (p.default) {
    return css`
         border: 1px solid rgba(100, 100, 100, 0.5);
         background: rgba(150, 150, 150, 0.1); 
         color:#E0E0E0;
         :hover{
            transition: ease-in 450ms;
            transition: ease-out 300ms;
            background: rgba(196, 196, 196, 0.1);
         }
    `;
  }
  else if (p.succes) {
    return css`
        background-color: #00C853;
        color:#E0E0E0;
        border: none;
         :hover{
            transition: ease-in 450ms;
            transition: ease-out 300ms;
            background-color:rgba(0, 200, 83, 0.8);
         }
    `;}
  
  else if (p.dark) {
    return css`
      background-color: #424242;
      color:#E0E0E0; 
      border: none;
       :hover{
            transition: ease-in 450ms;
            transition: ease-out 300ms;
            background-color: rgba(66, 66, 66, 0.8);
         }
    `;}
  
    }
  }
  
${p => {
  if (p.primary && p.outline) {
    return css`
      border: 2px solid #0288D1;
      color:#0288D1;
      background: transparent;
        `;
  }

  else if(p.danger && p.outline){
      return css`
      border: 2px solid #DD2C00;
      color:#DD2C00;
      background:transparent;
    `;
  }
     else if(p.default && p.outline){
      return css`
      border: 2px solid #E0E0E0; 
      color:"#E0E0E0"; 
      background:transparent;
    `;
  }
   else if(p.succes && p.outline) {
      return css`
      border: 2px solid #00C853;
      color:#00C853;
      background:transparent;
    `;
  }
  
  else if(p.dark && p.outline) {
    return css`
      border:2px solid  #424242;
      color: #424242;
      background: transparent;
    `;
     }
    }
  }
  ${space}
`