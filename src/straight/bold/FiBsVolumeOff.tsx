import React from 'react';
import type { IconProps } from '../../types';

export const FiBsVolumeOff: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m13,23.609l-7.733-5.109h-3.144c-1.171,0-2.123-.952-2.123-2.123V7.623c0-1.171.952-2.123,2.123-2.123h3.144L13,.391v23.219ZM3,15.5h3.169l3.831,2.531V5.969l-3.831,2.531h-3.169v7Z"/></svg>
);

FiBsVolumeOff.displayName = 'FiBsVolumeOff';
