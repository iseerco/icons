import React from 'react';
import type { IconProps } from '../../types';

export const SealExclamation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,8.48V3.5h-4.98L12-.02l-3.52,3.52H3.5v4.98L-.02,12l3.52,3.52v4.98h4.98l3.52,3.52,3.52-3.52h4.98v-4.98l3.52-3.52-3.52-3.52Zm-7.5,9.52h-2v-2h2v2Zm0-4h-2V6h2V14Z"/></svg>
);

SealExclamation.displayName = 'SealExclamation';
