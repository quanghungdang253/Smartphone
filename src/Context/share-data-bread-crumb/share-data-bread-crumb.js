// src/contexts/BreadcrumbContext.js
import React, { createContext, useState } from 'react';

export const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState({
              Nameproduct: '',
  });

  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
             {children}
    </BreadcrumbContext.Provider>
  );
};
