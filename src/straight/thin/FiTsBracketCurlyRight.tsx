import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBracketCurlyRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.5,24h-3.5v-1h3.5c.83,0,1.5-.67,1.5-1.5v-6.71l2.79-2.79-2.79-2.79V2.5c0-.83-.67-1.5-1.5-1.5h-3.5V0h3.5c1.38,0,2.5,1.12,2.5,2.5v6.29l3.21,3.21-3.21,3.21v6.29c0,1.38-1.12,2.5-2.5,2.5Z"/></svg>
);

FiTsBracketCurlyRight.displayName = 'FiTsBracketCurlyRight';
