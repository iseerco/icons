import React from 'react';
import type { IconProps } from '../../types';

export const ArrowToRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,10.553a2.578,2.578,0,0,0-.263-.321l-4.95-4.95L15.373,6.7l4.3,4.3H0v2H19.676l-4.3,4.3,1.414,1.414,4.95-4.95A2.578,2.578,0,0,0,22,13.447V19h2V5H22Z"/></svg>
);

ArrowToRight.displayName = 'ArrowToRight';
