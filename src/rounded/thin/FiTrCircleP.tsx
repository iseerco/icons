import React from 'react';
import type { IconProps } from '../../types';

export const FiTrCircleP: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m13.5,6h-3c-1.654,0-3,1.346-3,3v8.5c0,.276.224.5.5.5s.5-.224.5-.5v-3.5h5c2.206,0,4-1.794,4-4s-1.794-4-4-4Zm0,7h-5v-4c0-1.103.897-2,2-2h3c1.654,0,3,1.346,3,3s-1.346,3-3,3ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z"/></svg>
);

FiTrCircleP.displayName = 'FiTrCircleP';
