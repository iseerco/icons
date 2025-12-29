import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPi: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,3v16.5c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5h3c0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5V3h-5v12.5c0,5.197-3.337,8.355-3.479,8.487l-2.041-2.198c.019-.019,2.521-2.438,2.521-6.289V3c-3.796,0-3.998,3.327-4,3.994l-3,.021c-.003-.312.027-3.112,2.023-5.128C3.263.635,4.937,0,7,0h17v3h-6Z"/></svg>
);

FiBsPi.displayName = 'FiBsPi';
