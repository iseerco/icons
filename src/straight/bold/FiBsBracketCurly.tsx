import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBracketCurly: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,24h-3.5c-1.93,0-3.5-1.57-3.5-3.5v-4.88l-3.62-3.62,3.62-3.62V3.5c0-1.93,1.57-3.5,3.5-3.5h3.5V3h-3.5c-.28,0-.5,.22-.5,.5v6.12l-2.38,2.38,2.38,2.38v6.12c0,.28,.22,.5,.5,.5h3.5v3Z"/></svg>
);

FiBsBracketCurly.displayName = 'FiBsBracketCurly';
