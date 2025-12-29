import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.079,6L12.996,.445c-.532-.593-1.461-.593-1.993,0L5.921,6h5.079V24h2V6h5.079Z"/></svg>
);

ArrowAltUp.displayName = 'ArrowAltUp';
