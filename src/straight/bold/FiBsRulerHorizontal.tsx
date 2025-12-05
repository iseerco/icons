import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRulerHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,7.03H3.5c-1.93,0-3.5,1.57-3.5,3.5v7.5H24v-7.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,8h-2v-3h-3v3h-2.5v-3h-3v3h-2.5v-3h-3v3H3v-4.5c0-.275,.225-.5,.5-.5H20.5c.275,0,.5,.225,.5,.5v4.5Z"/></svg>
);

FiBsRulerHorizontal.displayName = 'FiBsRulerHorizontal';
