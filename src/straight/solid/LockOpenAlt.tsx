import React from 'react';
import type { IconProps } from '../../types';

export const LockOpenAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m18.5,0c-3.033,0-5.5,2.468-5.5,5.5v2.5H0v13c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3v-13h-3v-2.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5h2c0-3.032-2.467-5.5-5.5-5.5Zm-8.5,18h-2v-4h2v4Z"/>
</svg>
);

LockOpenAlt.displayName = 'LockOpenAlt';
