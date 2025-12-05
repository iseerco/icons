import React from 'react';
import type { IconProps } from '../../types';

export const U: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-5.514,0-10-4.486-10-10V1c0-.553,.448-1,1-1s1,.447,1,1V14c0,4.411,3.589,8,8,8s8-3.589,8-8V1c0-.553,.448-1,1-1s1,.447,1,1V14c0,5.514-4.486,10-10,10Z"/></svg>
);

U.displayName = 'U';
