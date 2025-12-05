import React from 'react';
import type { IconProps } from '../../types';

export const ComputerMouse: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m11,10h-7c0-3.86,3.14-7,7-7v7Zm-7,6c0,4.411,3.589,8,8,8s8-3.589,8-8v-4H4v4Zm16-6c0-3.86-3.141-7-7-7v7h7ZM13,1c0-.552-.448-1-1-1s-1,.448-1,1v2h2V1Z"/>
</svg>
);

ComputerMouse.displayName = 'ComputerMouse';
