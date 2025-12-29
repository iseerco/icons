import React from 'react';
import type { IconProps } from '../../types';

export const FiTsPopsicle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,9C21,4.038,16.963,0,12,0S3,4.038,3,9v12h8.5v3h1v-3h8.5v-12Zm-1,11h-7.5v-12h-1v12h-7.5v-11C4,4.589,7.589,1,12,1s8,3.589,8,8v11Z"/>
</svg>
);

FiTsPopsicle.displayName = 'FiTsPopsicle';
