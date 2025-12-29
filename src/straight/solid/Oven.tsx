import React from 'react';
import type { IconProps } from '../../types';

export const Oven: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m2,10v14h20v-14H2Zm17,3v8H5v-8h14Zm-2,2l.002,4H7v-4h10Zm5-7V3c0-1.657-1.343-3-3-3H5c-1.657,0-3,1.343-3,3v5h20Zm-4.5-5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5.5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5.5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Z"/>
</svg>
);

Oven.displayName = 'Oven';
