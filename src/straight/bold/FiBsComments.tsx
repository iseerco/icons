import React from 'react';
import type { IconProps } from '../../types';

export const FiBsComments: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,9A9,9,0,0,0,0,9v9H9A9.01,9.01,0,0,0,18,9ZM9,15H3V9a6,6,0,1,1,6,6Zm15,1v8H16a8,8,0,0,1-6.92-4,10.96,10.96,0,0,0,3.322-.54A4.977,4.977,0,0,0,16,21h5V16a4.977,4.977,0,0,0-1.544-3.6A10.96,10.96,0,0,0,20,9.08,8,8,0,0,1,24,16Z"/></svg>
);

FiBsComments.displayName = 'FiBsComments';
