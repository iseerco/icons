import React from 'react';
import type { IconProps } from '../../types';

export const FiTrU: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-5.514,0-10-4.486-10-10V.5c-.01-.649,1.01-.649,1,0V14c.454,11.926,17.55,11.917,18,0V.5c-.01-.649,1.01-.649,1,0V14c0,5.514-4.486,10-10,10Z"/></svg>
);

FiTrU.displayName = 'FiTrU';
