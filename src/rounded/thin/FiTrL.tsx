import React from 'react';
import type { IconProps } from '../../types';

export const FiTrL: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V.5c-.01-.649,1.01-.649,1,0V19.5c0,1.93,1.57,3.5,3.5,3.5h15c.649-.01,.649,1.01,0,1Z"/></svg>
);

FiTrL.displayName = 'FiTrL';
