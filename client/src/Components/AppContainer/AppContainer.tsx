import { NavBar } from '../NavBar/NavBar';
import styles from './AppContainer.styles.module.scss';

type AppContainerProps = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
