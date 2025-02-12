import { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 px-14 bg-gray-100">
        {children}
      </div>
    </div>
  );
};
