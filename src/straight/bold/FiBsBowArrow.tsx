import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBowArrow: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H17V3h1.879L16.462,5.417A11.661,11.661,0,0,0,1.126,6.41L.065,7.47l7.172,7.172L4.879,17H0v3H1.879L.033,21.846l2.121,2.121L4,22.121V24H7V19.121l2.358-2.358,7.172,7.172,1.06-1.061a11.66,11.66,0,0,0,.993-15.336L21,5.121V7h3V3A3,3,0,0,0,21,0ZM4.4,7.562a8.667,8.667,0,0,1,9.916,0L9.358,12.521ZM16.437,19.6l-4.958-4.958,4.958-4.958A8.666,8.666,0,0,1,16.437,19.6Z"/></svg>
);

FiBsBowArrow.displayName = 'FiBsBowArrow';
