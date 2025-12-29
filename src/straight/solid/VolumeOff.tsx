import React from 'react';
import type { IconProps } from '../../types';

export const VolumeOff: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,24.013l-7.356-6.013h-2.644c-1.103,0-2-.897-2-2v-8c0-1.103.897-2,2-2h2.646L12,.037v23.976Z"/></svg>
);

VolumeOff.displayName = 'VolumeOff';
