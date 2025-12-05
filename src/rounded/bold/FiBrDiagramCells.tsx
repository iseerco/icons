import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDiagramCells: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,0H4C1.79,0,0,1.79,0,4v2c0,2.21,1.79,4,4,4H20c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4Zm1,6c0,.55-.45,1-1,1H4c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1H20c.55,0,1,.45,1,1v2Zm-1,8H4c-2.21,0-4,1.79-4,4v2c0,2.21,1.79,4,4,4H20c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4Zm1,6c0,.55-.45,1-1,1H4c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1H20c.55,0,1,.45,1,1v2Z"/></svg>
);

FiBrDiagramCells.displayName = 'FiBrDiagramCells';
