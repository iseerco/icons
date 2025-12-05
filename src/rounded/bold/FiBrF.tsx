import React from 'react';
import type { IconProps } from '../../types';

export const FiBrF: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H7.5C4.467,0,2,2.467,2,5.5V22.5c.033,1.972,2.967,1.971,3,0V14h11.5c1.972-.033,1.971-2.967,0-3H5V5.5c0-1.378,1.122-2.5,2.5-2.5h13c1.972-.033,1.971-2.967,0-3Z"/></svg>
);

FiBrF.displayName = 'FiBrF';
