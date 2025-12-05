import React from 'react';
import type { IconProps } from '../../types';

export const ZoomOut: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.707,22.293l-5.966-5.965a10,10,0,1,0-1.414,1.414l5.966,5.965a1,1,0,0,0,1.414-1.414ZM13,11H7A1,1,0,0,1,7,9h6a1,1,0,0,1,0,2Z"/></svg>
);

ZoomOut.displayName = 'ZoomOut';
