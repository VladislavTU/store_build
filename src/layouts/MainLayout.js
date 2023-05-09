import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = ({ cartOpen, onCart }) => {
  return (
    <>
      <Header cartOpen={cartOpen} onCart={onCart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
