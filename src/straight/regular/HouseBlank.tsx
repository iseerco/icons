import React from 'react';
import type { IconProps } from '../../types';

export const HouseBlank: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V10.043c0-.929,.42-1.79,1.151-2.363L10.151,.638c1.088-.854,2.609-.854,3.697,0l9,7.043c.731,.572,1.151,1.434,1.151,2.362v13.957ZM2,22H22V10.043c0-.31-.14-.597-.384-.787L12.616,2.212c-.363-.283-.869-.283-1.232,0L2.384,9.255c-.244,.191-.384,.479-.384,.788v11.957Z"/></svg>
);

HouseBlank.displayName = 'HouseBlank';
