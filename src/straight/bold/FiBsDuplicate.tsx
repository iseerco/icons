import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDuplicate: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.9,0H11A3,3,0,0,0,8,3V5H5A3,3,0,0,0,2,8V24H17V18h5V3.307ZM14,21H5V8H8V18h6Zm-3-6V3h5V6h3v9Z"/></svg>
);

FiBsDuplicate.displayName = 'FiBsDuplicate';
