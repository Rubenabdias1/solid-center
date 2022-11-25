import { Card, FormControl, Input, InputLabel } from '@mui/material';
import { Form, Link, Navigate } from 'react-router-dom';
import styles from './login.styles.module.scss';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { UserContext } from '../../utils/userContext';
import { useLoginMutation } from '../../graphql/generated/graphql';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login: setUser } = useContext(UserContext);
  const [login] = useLoginMutation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const { data } = await login({ variables: { email, password } });
    if (data) {
      const {
        login: { user, errors },
      } = data;
      if (user) return setUser!(user);
      console.log(errors);
    }
  };

  return user ? (
    <Navigate to="/" />
  ) : (
    <Card className={styles.loginPage}>
      <Form action="/" onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>

        <Button type="submit" variant="contained">
          Login
        </Button>
        <span>
          Don't have an account? <Link to="/register">Create an Account</Link>
        </span>
      </Form>
    </Card>
  );
};
