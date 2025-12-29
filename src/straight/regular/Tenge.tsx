import React from 'react';
import type { IconProps } from '../../types';

export const Tenge: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,0V2H2V0H22ZM2,6H11V24h2V6h9v-2H2v2Z"/></svg>
);

Tenge.displayName = 'Tenge';
