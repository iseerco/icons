import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNfcPen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.09,17H5V5h6.62l-3.62,3.62v5.38h6v-6h-2.55l3-3h2.55V14.09l-2.91,2.91Zm9.27-3.36c-.85-.85-2.23-.85-3.09,0l-7.28,7.28v3.09h3.09l7.28-7.28c.85-.85,.85-2.23,0-3.09ZM3,3.5c0-.28,.22-.5,.5-.5h15c.28,0,.5,.22,.5,.5V12.11c.85-.77,1.93-1.14,3-1.09V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V22H11v-3H3V3.5Z"/></svg>
);

FiBsNfcPen.displayName = 'FiBsNfcPen';
