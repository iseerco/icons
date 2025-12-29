import React from 'react';
import type { IconProps } from '../../types';

export const JugBottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m19.493,6.105l-6.493-1.082v-3.023h1V0H5v2h1v3.178l-2.053.77c-1.165.437-1.947,1.565-1.947,2.809v15.244h20v-14.936c0-1.473-1.054-2.717-2.507-2.959Zm-2.493,3.395c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v5.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-5.5Z"/>
</svg>
);

JugBottle.displayName = 'JugBottle';
