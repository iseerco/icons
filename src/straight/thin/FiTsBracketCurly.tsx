import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBracketCurly: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,24h-3.5c-1.38,0-2.5-1.12-2.5-2.5v-6.29l-3.21-3.21,3.21-3.21V2.5c0-1.38,1.12-2.5,2.5-2.5h3.5V1h-3.5c-.83,0-1.5,.67-1.5,1.5v6.71l-2.79,2.79,2.79,2.79v6.71c0,.83,.67,1.5,1.5,1.5h3.5v1Z"/></svg>
);

FiTsBracketCurly.displayName = 'FiTsBracketCurly';
