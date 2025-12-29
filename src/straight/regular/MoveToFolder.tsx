import React from 'react';
import type { IconProps } from '../../types';

export const MoveToFolder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3H12.24L8.24,1H3C1.35,1,0,2.35,0,4V23H24V6c0-1.65-1.35-3-3-3ZM3,3H7.76l4,2h9.24c.55,0,1,.45,1,1v1H2v-3c0-.55,.45-1,1-1Zm-1,18V9H22v12H2Zm15.42-7.41c.77,.78,.77,2.04,0,2.81l-3.3,3.3-1.41-1.41,2.29-2.29H7v-2H15.01l-2.3-2.29,1.41-1.41,3.3,3.3Z"/></svg>
);

MoveToFolder.displayName = 'MoveToFolder';
