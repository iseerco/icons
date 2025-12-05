import React from 'react';
import type { IconProps } from '../../types';

export const FiTsDiagramCells: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,9H0V2.5C0,1.12,1.12,0,2.5,0H21.5c1.38,0,2.5,1.12,2.5,2.5v6.5ZM1,8H23V2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5v5.5ZM21.5,24H2.5c-1.38,0-2.5-1.12-2.5-2.5v-6.5H24v6.5c0,1.38-1.12,2.5-2.5,2.5ZM1,16v5.5c0,.83,.67,1.5,1.5,1.5H21.5c.83,0,1.5-.67,1.5-1.5v-5.5H1Z"/></svg>
);

FiTsDiagramCells.displayName = 'FiTsDiagramCells';
