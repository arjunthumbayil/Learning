import Header from './Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  console.log('Rendering AppLayout');
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
