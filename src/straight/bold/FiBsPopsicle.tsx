import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPopsicle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,9C21,4.038,16.963,0,12,0S3,4.038,3,9v11h7.5v4h3v-4h7.5v-11Zm-3,8h-4.5v-8h-3v8h-4.5v-8c0-3.309,2.691-6,6-6s6,2.691,6,6v8Z"/>
</svg>
);

FiBsPopsicle.displayName = 'FiBsPopsicle';
