import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-left: auto;
    margin-top: 1em;
  }
`;

export const FormWrapper = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  
  input {
    min-width: 50vw;
  }
`
