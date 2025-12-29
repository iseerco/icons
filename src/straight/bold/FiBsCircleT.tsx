import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCircleT: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,6.5h10v3h-3.5v8.75h-3v-8.75h-3.5v-3Zm17,5.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.963-4.038-9-9-9S3,7.037,3,12s4.038,9,9,9,9-4.037,9-9Z"/></svg>
);

FiBsCircleT.displayName = 'FiBsCircleT';
