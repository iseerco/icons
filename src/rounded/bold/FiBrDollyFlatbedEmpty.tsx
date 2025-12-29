import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDollyFlatbedEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m22.5,18.013h-14c-1.378,0-2.5-1.121-2.5-2.5V4.513C6,2.031,3.981.013,1.5.013.671.013,0,.685,0,1.513s.671,1.5,1.5,1.5,1.5.673,1.5,1.5v11c0,2.133,1.221,3.986,3,4.898v1.102c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h5v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h1.5c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/>
</svg>
);

FiBrDollyFlatbedEmpty.displayName = 'FiBrDollyFlatbedEmpty';
