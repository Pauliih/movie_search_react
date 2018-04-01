import React from 'react';

// Componente puro con la props children
export const Title = ({ children }) => (
  <h1 className="title">{children}</h1>
)