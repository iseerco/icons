import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowsAltH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.73,11.356l-5.154-5.087c-.581-.574-1.575-.167-1.575,.644v3.587H7v-3.587c0-.811-.994-1.218-1.575-.644L.27,11.356c-.36,.356-.36,.932,0,1.288l5.154,5.087c.581,.574,1.575,.167,1.575-.644v-3.587h10v3.587c0,.811,.994,1.218,1.575,.644l5.154-5.087c.36-.356,.36-.932,0-1.288Z"/></svg>
);

FiBrArrowsAltH.displayName = 'FiBrArrowsAltH';
