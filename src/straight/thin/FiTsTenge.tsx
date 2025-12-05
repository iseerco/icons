import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTenge: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,0V1H2V0H22ZM2,5H11.5V24h1V5h9.5v-1H2v1Z"/></svg>
);

FiTsTenge.displayName = 'FiTsTenge';
