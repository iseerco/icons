import React from 'react';
import type { IconProps } from '../../types';

export const Fort: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,7c1.103,0,2-.897,2-2V0h-2V2h-2V0h-2V2H2V0H0V5c0,1.103,.897,2,2,2h6Z"/><rect x="2" y="9" width={size} height={size}/><g><path d="M14,11h-4v8c0-1.103,.897-2,2-2s2,.897,2,2V11Z"/><rect x="16" y="9" width={size} height={size}/></g><path d="M22,0V2h-2V0h-2V2h-2V0h-2V5c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V0h-2Z"/></svg>
);

Fort.displayName = 'Fort';
