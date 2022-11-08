import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import styles from './AppContainer.styles.module.scss';

type AppContainerProps = {
  children?: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
