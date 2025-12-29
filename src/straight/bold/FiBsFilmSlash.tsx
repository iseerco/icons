import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFilmSlash: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g><polygon points="18 16.5 15 16.5 15 4 9 4 9 7.5 6 7.5 6 1 18 1 18 16.5"/><rect x="20" y="1" width={size} height={size}/><rect x="7.5" y="1" width={size} height={size}/><rect x="16.5" y="4" width={size} height={size}/><rect x="11.5" y="10" width={size} height={size}/><rect x="17" y="16" width={size} height={size}/></g><rect x="2.5" y="16" width={size} height={size}/><rect x="10.495" y="-3.468" width={size} height={size} transform="translate(-4.968 11.995) rotate(-45)"/><polygon points="18.05 23 15.05 20 9 20 9 13.949 1 5.949 1 23 4 23 4 13 6 13 6 23 18.05 23"/></svg>
);

FiBsFilmSlash.displayName = 'FiBsFilmSlash';
