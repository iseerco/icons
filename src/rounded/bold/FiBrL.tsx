import React from 'react';
import type { IconProps } from '../../types';

export const FiBrL: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,24H7.5c-3.033,0-5.5-2.468-5.5-5.5V1.5c.033-1.972,2.967-1.971,3,0V18.5c0,1.379,1.122,2.5,2.5,2.5h13c1.972,.034,1.971,2.967,0,3Z"/></svg>
);

FiBrL.displayName = 'FiBrL';
