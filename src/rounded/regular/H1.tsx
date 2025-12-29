import React from 'react';
import type { IconProps } from '../../types';

export const H1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m14,5v14c0,.553-.448,1-1,1s-1-.447-1-1v-6H4v6c0,.553-.448,1-1,1s-1-.447-1-1V5c0-.553.448-1,1-1s1,.447,1,1v6h8v-6c0-.553.448-1,1-1s1,.447,1,1Zm7.383-.924c-.375-.156-.805-.07-1.09.217l-3,3c-.391.391-.391,1.023,0,1.414s1.023.391,1.414,0l1.293-1.293v11.586c0,.553.448,1,1,1s1-.447,1-1V5c0-.404-.244-.77-.617-.924Z"/></svg>
);

H1.displayName = 'H1';
