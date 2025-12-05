import React from 'react';
import type { IconProps } from '../../types';

export const Label: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0,2,5.522V21a3,3,0,0,0,3,3H19a3.009,3.009,0,0,0,3-3V5.522Zm0,8.5A1.5,1.5,0,1,1,13.5,7,1.5,1.5,0,0,1,12,8.5Z"/></svg>
);

Label.displayName = 'Label';
