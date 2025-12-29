import React from 'react';
import type { IconProps } from '../../types';

export const FiBsEject: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,19v3H0v-3h24Zm-.063-2H.063L12,1.546l11.937,15.454Zm-17.766-3h11.657l-5.829-7.546-5.829,7.546Z"/></svg>
);

FiBsEject.displayName = 'FiBsEject';
