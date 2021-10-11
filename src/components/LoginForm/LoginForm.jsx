import React from 'react'

import {
  Form,
  FormInput,
  Label,
  Input,
  Button,
  Error,
  H1,
} from './StyledComponents';



const LoginForm = ({
  setUsername,
  setPassword,
  handleSubmit,
  isLoading,
  isDisabled = true,
  error,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {error && <Error>{error}</Error>}
      <H1>Login</H1>
      <FormInput>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" onChange={(e) => setUsername(e.target.value)}/>
      </FormInput>
      <FormInput>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
      </FormInput>
      <Button disabled={isDisabled}>{!isLoading ? 'Login' : 'Loading...'}</Button>
    </Form>
  );
}

export default LoginForm
