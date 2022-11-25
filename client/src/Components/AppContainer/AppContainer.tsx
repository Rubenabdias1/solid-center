import { Navigate, Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import styles from './AppContainer.styles.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../utils/userContext';

type AppContainerProps = {
  children?: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = () => {
  const { user } = useContext(UserContext);

  return !user ? (
    <Navigate to={'/login'} />
  ) : (
    <>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
