import React from 'react';
import type { IconProps } from '../../types';

export const FiBrT: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5c-1.972,.034-1.971,2.966,0,3h7V22.5c.034,1.972,2.966,1.971,3,0V3h7c1.972-.034,1.971-2.966,0-3Z"/></svg>
);

FiBrT.displayName = 'FiBrT';
