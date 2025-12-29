import React from 'react';
import type { IconProps } from '../../types';

export const FiTrT: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,0H2.5c-.649-.01-.649,1.01,0,1H11.5V23.5c-.01,.649,1.01,.649,1,0V1h9c.649,.01,.649-1.01,0-1Z"/></svg>
);

FiTrT.displayName = 'FiTrT';
