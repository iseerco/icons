import React from 'react';
import type { IconProps } from '../../types';

export const Resources: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><circle cx="12" cy="17" r="6"/><path d="M11.383,9.024,7.706,2.653a1,1,0,0,0-1.732,0L0,13H5.074A8.008,8.008,0,0,1,11.383,9.024Z"/><path d="M13,4V9.062A8.022,8.022,0,0,1,19.747,15H24V4Z"/></svg>
);

Resources.displayName = 'Resources';
