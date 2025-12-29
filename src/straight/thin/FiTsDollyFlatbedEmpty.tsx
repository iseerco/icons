import React from 'react';
import type { IconProps } from '../../types';

export const FiTsDollyFlatbedEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,19H5.5c-.827,0-1.5-.673-1.5-1.5V2.5C4,1.121,2.878,0,1.5,0H0v1h1.5c.827,0,1.5.673,1.5,1.5v15c0,1.379,1.122,2.5,2.5,2.5h.5v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h4v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h2v-1Zm-13,2c0,1.103-.897,2-2,2s-2-.897-2-2v-1h4v1Zm10,0c0,1.103-.897,2-2,2s-2-.897-2-2v-1h4v1Z"/>
</svg>
);

FiTsDollyFlatbedEmpty.displayName = 'FiTsDollyFlatbedEmpty';
