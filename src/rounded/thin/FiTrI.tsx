import React from 'react';
import type { IconProps } from '../../types';

export const FiTrI: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,23h-6V1h6c.649,.01,.649-1.01,0-1H5.5c-.649-.01-.649,1.01,0,1h6V23H5.5c-.649-.01-.649,1.01,0,1h13c.649,.01,.649-1.01,0-1Z"/></svg>
);

FiTrI.displayName = 'FiTrI';
