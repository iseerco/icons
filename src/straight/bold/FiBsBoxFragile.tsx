import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBoxFragile: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276,.224-.5,.5-.5H20.5c.276,0,.5,.224,.5,.5V21Zm-7.5-6.462v1.462h2.5v3H8v-3h2.5v-1.429c-2.053-.623-3.5-2.532-3.5-4.786V5h4.196l-2.223,5h2.818l-1.216,2.336,1.789,.895,2.663-5.231h-2.977l1.333-3h3.615v4.785c0,2.216-1.5,4.099-3.5,4.753Z"/></svg>
);

FiBsBoxFragile.displayName = 'FiBsBoxFragile';
