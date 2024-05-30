import React, { ReactNode } from 'react';
import DesktopNav from '@/components/DesktopNav';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <DesktopNav />
      {children}
    </div>
  );
}

export default MainLayout;
