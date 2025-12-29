import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTableRows: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v4.5H9V5h11.5c.275,0,.5,.225,.5,.5ZM3,5.5c0-.275,.225-.5,.5-.5h2.5v14H3V5.5Zm6,13.5v-6h12v6H9Z"/></svg>
);

FiBsTableRows.displayName = 'FiBsTableRows';
