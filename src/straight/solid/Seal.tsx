import React from 'react';
import type { IconProps } from '../../types';

export const Seal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m12,24.021l-3.521-3.521H3.5v-4.979L-.021,12l3.521-3.521V3.5h4.979L12-.021l3.521,3.521h4.979v4.979l3.521,3.521-3.521,3.521v4.979h-4.979l-3.521,3.521Z"/>
</svg>
);

Seal.displayName = 'Seal';
