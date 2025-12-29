import React from 'react';
import type { IconProps } from '../../types';

export const Fort: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,0V2h-2V0h-2V2h-2V0h-2V6c0,1.103,.897,2,2,2v3H8v-3c1.103,0,2-.897,2-2V0h-2V2h-2V0h-2V2H2V0H0V6c0,1.103,.897,2,2,2V24H22V8c1.103,0,2-.897,2-2V0h-2Zm-6,13v9h-2v-4c0-1.105-.895-2-2-2s-2,.895-2,2v4h-2V13h8ZM8,4v2H2v-2h6Zm-4,4h2v14h-2V8Zm16,14h-2V8h2v14ZM16,6v-2h6v2h-6Z"/></svg>
);

Fort.displayName = 'Fort';
