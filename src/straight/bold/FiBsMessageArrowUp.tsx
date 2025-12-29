import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMessageArrowUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v16.5h6.741l3.598,3.03c.479.426,1.08.636,1.675.636.583,0,1.158-.201,1.606-.601l3.708-3.065h6.672V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17h-4.751l-4.246,3.511-4.167-3.511H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v13.5ZM12.707,5.293l3.793,3.707h-3v6h-3v-6h-3l3.793-3.707c.391-.391,1.024-.391,1.414,0Z"/></svg>
);

FiBsMessageArrowUp.displayName = 'FiBsMessageArrowUp';
