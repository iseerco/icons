import React from 'react';
import type { IconProps } from '../../types';

export const FiBsInbox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.5,11v2.636A1.366,1.366,0,0,1,14.136,15H9.864A1.366,1.366,0,0,1,8.5,13.636V11H0V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11ZM21,21H3V14H5.515a4.37,4.37,0,0,0,4.349,4h4.272a4.37,4.37,0,0,0,4.349-4H21Z"/><rect x="2" y="6" width={size} height={size}/><rect x="2" y="1" width={size} height={size}/></svg>
);

FiBsInbox.displayName = 'FiBsInbox';
