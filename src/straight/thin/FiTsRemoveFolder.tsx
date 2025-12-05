import React from 'react';
import type { IconProps } from '../../types';

export const FiTsRemoveFolder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.21,19.52l3.8,3.78-.71,.71-3.8-3.78-3.76,3.77-.71-.71,3.76-3.78-3.8-3.78,.71-.71,3.8,3.78,3.8-3.82,.71,.71-3.8,3.82Z"/><path d="M21.5,3H12.12L8.12,1H2.5C1.12,1,0,2.12,0,3.5V23H13v-1H1V8H23v5h1V5.5c0-1.38-1.12-2.5-2.5-2.5ZM1,7V3.5c0-.83,.67-1.5,1.5-1.5H7.88l4,2h9.62c.83,0,1.5,.67,1.5,1.5v1.5H1Z"/></svg>
);

FiTsRemoveFolder.displayName = 'FiTsRemoveFolder';
