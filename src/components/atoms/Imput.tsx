import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.9rem;
  border: 0.0625rem solid ;
  border-radius: 4px;
  font-size: 1rem;
  transition: 0.3s;
  &:focus {
     border-color: #6c63ff;
    outline: none;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label? : string;    
}

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};
