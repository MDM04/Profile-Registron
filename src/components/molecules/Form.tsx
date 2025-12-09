import type { ReactNode, FormHTMLAttributes } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
 display: flex;
  flex-direction: column;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 450px;
  gap: 0.5rem;
`;

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = ({ children, ...rest }: FormProps) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};
