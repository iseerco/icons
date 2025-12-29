import React from 'react';
import type { IconProps } from '../../types';

export const TableLayout: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5H0Zm7,2H0v8c0,2.757,2.243,5,5,5h2V9Zm2,0v13h10c2.757,0,5-2.243,5-5V9H9Z"/></svg>
);

TableLayout.displayName = 'TableLayout';
