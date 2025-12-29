import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTenge: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,0V3H2V0H22ZM2,8H10.5V24h3V8h8.5v-3H2v3Z"/></svg>
);

FiBsTenge.displayName = 'FiBsTenge';
