import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowAltLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,10.5H7v-3.587c0-.811-.994-1.218-1.575-.644L.27,11.356c-.36,.356-.36,.932,0,1.288l5.154,5.087c.581,.574,1.575,.167,1.575-.644v-3.587h15.5c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Z"/></svg>
);

FiBrArrowAltLeft.displayName = 'FiBrArrowAltLeft';
