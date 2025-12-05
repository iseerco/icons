import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAngleCircleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,1,0,12,12.013,12.013,0,0,1,12,0Zm0,21a9,9,0,1,0-9-9A9.01,9.01,0,0,0,12,21ZM10.232,8.732l-4.25,4.25L8.1,15.1l3.9-3.9,3.9,3.9,2.122-2.122-4.25-4.25a2.5,2.5,0,0,0-3.536,0Z"/></svg>
);

FiBsAngleCircleUp.displayName = 'FiBsAngleCircleUp';
