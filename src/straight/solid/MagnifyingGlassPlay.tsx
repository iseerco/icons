import React from 'react';
import type { IconProps } from '../../types';

export const MagnifyingGlassPlay: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m11.515 10-2.515 1.467v-2.934zm12.442 12.543-1.414 1.414-6.219-6.219c-1.725 1.412-3.927 2.262-6.324 2.262-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10c0 2.398-.85 4.6-2.262 6.324zm-8.472-12.543-8.485-4.949v9.898z"/></svg>
);

MagnifyingGlassPlay.displayName = 'MagnifyingGlassPlay';
