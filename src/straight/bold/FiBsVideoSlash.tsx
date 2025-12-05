import React from 'react';
import type { IconProps } from '../../types';

export const FiBsVideoSlash: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,6.5c0-1.93-1.57-3.5-3.5-3.5H5.105L2.115,.01-.006,2.131,21.869,24.006l2.121-2.121-2.99-2.99v-2.895l3,3V5.019l-3,3v-1.519Zm-12.895-.5h9.395c.275,0,.5,.224,.5,.5V15.895L8.105,6Zm4.93,12l3,3H0V6.5c0-.454,.093-.884,.251-1.283l2.749,2.749v10.034H13.034Z"/></svg>
);

FiBsVideoSlash.displayName = 'FiBsVideoSlash';
