import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSortAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.018,18.518l-4.75,4.75c-.487,.487-1.127,.731-1.768,.731s-1.28-.244-1.768-.731L-.018,18.518l2.121-2.121,2.896,2.896V0h3V19.293l2.896-2.896,2.121,2.121Zm.086-10.914l2.896-2.896V24h3V4.707l2.896,2.896,2.121-2.121L19.268,.732C18.78,.245,18.141,0,17.5,0s-1.28,.244-1.768,.731l-4.75,4.75,2.121,2.121Z"/></svg>
);

FiBsSortAlt.displayName = 'FiBsSortAlt';
