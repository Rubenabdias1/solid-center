import { Card, FormControl, Input, InputLabel } from '@mui/material';
import { Form, Navigate, Link } from 'react-router-dom';
import styles from './register.styles.module.scss';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { UserContext } from '../../utils/userContext';
import { useRegisterMutation } from '../../graphql/generated/graphql';

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, login: setUser } = useContext(UserContext);
  const [register] = useRegisterMutation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const { data } = await register({
      variables: {
        username,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      },
    });
    if (data) {
      const {
        register: { user, errors },
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
        <h4>Registration Form</h4>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            id="firstName"
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <br />
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
        <br />
        <br />
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
        <FormControl>
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <Input
            id="confirmPassword"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <br />
        <Button type="submit" variant="contained">
          Register
        </Button>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Form>
    </Card>
  );
};
