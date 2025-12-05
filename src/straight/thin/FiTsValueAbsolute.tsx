import React from 'react';
import type { IconProps } from '../../types';

export const FiTsValueAbsolute: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.854,6.854l-5.146,5.146,5.146,5.146-.707.707-5.146-5.146-5.146,5.146-.707-.707,5.146-5.146-5.146-5.146.707-.707,5.146,5.146,5.146-5.146.707.707ZM0,24h1V0H0v24ZM23,0v24h1V0h-1Z"/></svg>
);

FiTsValueAbsolute.displayName = 'FiTsValueAbsolute';
