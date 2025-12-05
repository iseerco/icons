import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSendBack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,12h-2.5v-2.5c0-1.93-1.57-3.5-3.5-3.5h-2.5v-2.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v8.5h6v6h6v6h12v-8.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.275.224-.5.5-.5h5c.276,0,.5.225.5.5v5.5H3V3.5Zm18,17.5h-6v-6h5.5c.276,0,.5.225.5.5v5.5Z"/></svg>
);

FiBsSendBack.displayName = 'FiBsSendBack';
