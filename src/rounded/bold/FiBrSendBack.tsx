import React from 'react';
import type { IconProps } from '../../types';

export const FiBrSendBack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19.5,12h-1.5v-2.5c0-1.933-1.567-3.5-3.5-3.5h-2.5v-1.5c0-2.481-2.019-4.5-4.5-4.5h-3C2.019,0,0,2.019,0,4.5v3c0,2.481,2.019,4.5,4.5,4.5h1.5v2.5c0,1.933,1.567,3.5,3.5,3.5h2.5v1.5c0,2.481,2.019,4.5,4.5,4.5h3c2.481,0,4.5-2.019,4.5-4.5v-3c0-2.481-2.019-4.5-4.5-4.5ZM3,7.5v-3c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v3c0,.827-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5Zm18,12c0,.827-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v3Z"/></svg>
);

FiBrSendBack.displayName = 'FiBrSendBack';
