import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLuggageRolling: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,7H18V3.5A3.5,3.5,0,0,0,14.5,0h-5A3.5,3.5,0,0,0,6,3.5V7H3.5A3.5,3.5,0,0,0,0,10.5V22H2v2H5V22H19v2h3V22h2V10.5A3.5,3.5,0,0,0,20.5,7ZM9,3.5A.5.5,0,0,1,9.5,3h5a.5.5,0,0,1,.5.5V7H9Zm-6,7a.5.5,0,0,1,.5-.5h17a.5.5,0,0,1,.5.5V19H3ZM7,12H17v3H7Z"/></svg>
);

FiBsLuggageRolling.displayName = 'FiBsLuggageRolling';
