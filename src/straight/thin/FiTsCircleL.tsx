import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCircleL: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-2.5-6h7.5v1h-7.5c-1.379,0-2.5-1.121-2.5-2.5V6h1v9.5c0,.827.673,1.5,1.5,1.5Z"/></svg>
);

FiTsCircleL.displayName = 'FiTsCircleL';
