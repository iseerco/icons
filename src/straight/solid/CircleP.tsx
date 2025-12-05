import React from 'react';
import type { IconProps } from '../../types';

export const CircleP: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1.5,14h-4v4h-2v-9.5c0-1.379,1.122-2.5,2.5-2.5h3.5c2.206,0,4,1.794,4,4s-1.794,4-4,4Zm0-2h-4v-3.5c0-.275.224-.5.5-.5h3.5c1.103,0,2,.897,2,2s-.897,2-2,2Z"/></svg>
);

CircleP.displayName = 'CircleP';
