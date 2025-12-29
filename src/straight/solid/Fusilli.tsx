import React from 'react';
import type { IconProps } from '../../types';

export const Fusilli: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M24,3h0c0,1.657-1.343,3-3,3h0v1c0,1.657-1.343,3-3,3V3c0-1.657,1.343-3,3-3V3h3Zm-11,5v7c1.657,0,3-1.343,3-3V5c-1.657,0-3,1.343-3,3Zm-5,4v7c1.657,0,3-1.343,3-3v-7c-1.657,0-3,1.343-3,3ZM0,21H0c0-1.657,1.343-3,3-3h0v-1c0-1.657,1.343-3,3-3v7c0,1.657-1.343,3-3,3v-3H0Z"/>
</svg>
);

Fusilli.displayName = 'Fusilli';
