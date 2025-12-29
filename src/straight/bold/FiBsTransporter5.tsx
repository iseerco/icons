import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTransporter5: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,14v-3h10v3H7ZM15,1h-6v3h6V1Zm3,5H6v3h12v-3ZM4,24h16v-3H4v3Zm17.667-9.647l-1.167-2.333-1.167,2.333-2.333,1.167,2.333,1.167,1.167,2.333,1.167-2.333,2.333-1.167-2.333-1.167ZM6.5,3.5l-2-1L3.5.5l-1,2L.5,3.5l2,1,1,2,1-2,2-1Z"/></svg>
);

FiBsTransporter5.displayName = 'FiBsTransporter5';
