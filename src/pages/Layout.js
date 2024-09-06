import React from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from './TabBar'; // Componente da nova página
//import TabBar from './TabBar'; // Importe seu componente de Tab Bar

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* O conteúdo das páginas será exibido aqui */}
        <Outlet />
      </div>
      
      {/* Tab Bar ficará sempre no final da página */}
      <TabBar />
    </div>
  );
};

export default Layout;
