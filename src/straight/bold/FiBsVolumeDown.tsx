import React from 'react';
import type { IconProps } from '../../types';

export const FiBsVolumeDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18.682,12c0,2.03-1.652,3.682-3.682,3.682v-7.364c2.03,0,3.682,1.652,3.682,3.682ZM5.267,5.5L13,.391v23.219l-7.733-5.109h-3.144c-1.171,0-2.123-.952-2.123-2.123V7.623c0-1.171.952-2.123,2.123-2.123h3.144Zm.901,3h-3.168v7h3.168l3.832,2.531V5.969l-3.832,2.531Z"/></svg>
);

FiBsVolumeDown.displayName = 'FiBsVolumeDown';
