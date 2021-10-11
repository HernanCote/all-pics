import styled from 'styled-components/macro';
import { getMediaMinWidth } from '../../utils/styles';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin: 1rem 0;
`;

const Input = styled.input`
  height: 2.5rem;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  ${getMediaMinWidth('sm')} {
    height: 3rem;
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  margin-top: 1.5rem;
  height: 2.5rem;
  border: none;
  width: 100%;
  background: #3283d2;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transform: scale(1.005);
    background: #3283D2BB;
  }

  &:disabled, &[disabled] {
    background: #3283d245;
    color: #efefef;
    cursor: auto;
    border: none;
  }
`;

const Error = styled.span`
  border: 1px solid rgba(180, 45 ,67, 0.5);
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1rem;
  color: rgba(180, 45 ,67, 0.9);
  background: rgba(180, 45 ,67, 0.3);
  margin: 1rem 0;
`;

const H1 = styled.h1``;

export {
  Form,
  FormInput,
  Label,
  Input,
  Button,
  Error,
  H1,
};