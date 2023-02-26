import React from 'react';
import { Outlet } from 'react-router-dom';

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside>
      <nav>{children}</nav>
    </aside>
  );
};

export const Main: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

type SidebarProps = {
  children: React.ReactElement | React.ReactElement[];
}
