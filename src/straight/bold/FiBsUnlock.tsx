import React from 'react';
import type { IconProps } from '../../types';

export const FiBsUnlock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,8V7.151A4,4,0,0,1,15.494,5.2l2.618-1.465A7,7,0,0,0,5,7.151V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM5,21V11H19l0,10Z"/><rect x="10" y="14" width={size} height={size}/></svg>
);

FiBsUnlock.displayName = 'FiBsUnlock';
