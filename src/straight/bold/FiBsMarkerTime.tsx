import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMarkerTime: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 23.994-7.06-6.905a10 10 0 1 1 14.131-14.154 10.008 10.008 0 0 1 0 14.141zm0-20.988a7 7 0 0 0 -4.95 11.95l4.95 4.844 4.962-4.853a7 7 0 0 0 -4.962-11.941zm1.939 11.055-3.439-3.44v-4.621h3v3.379l2.561 2.56z"/></svg>
);

FiBsMarkerTime.displayName = 'FiBsMarkerTime';
