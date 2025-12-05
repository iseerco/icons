import React from 'react';
import type { IconProps } from '../../types';

export const CircleL: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-2.5-6h7.5v2h-7.5c-1.379,0-2.5-1.121-2.5-2.5V6h2v9.5c0,.275.225.5.5.5Z"/></svg>
);

CircleL.displayName = 'CircleL';
