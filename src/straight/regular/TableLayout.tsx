import React from 'react';
import type { IconProps } from '../../types';

export const TableLayout: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3ZM3,4H21c.551,0,1,.448,1,1v2H2v-2c0-.552,.449-1,1-1Zm-1,5H7v11H2V9Zm7,11V9h13v11H9Z"/></svg>
);

TableLayout.displayName = 'TableLayout';
