import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCircle4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,6h3v12h-3v-4h-2.5c-1.93,0-3.5-1.57-3.5-3.5V6h3v4.5c0,.275,.225,.5,.5,.5h2.5V6Zm11,6c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.963-4.037-9-9-9S3,7.037,3,12s4.037,9,9,9,9-4.037,9-9Z"/></svg>
);

FiBsCircle4.displayName = 'FiBsCircle4';
