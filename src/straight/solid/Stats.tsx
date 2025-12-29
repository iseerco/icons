import React from 'react';
import type { IconProps } from '../../types';

export const Stats: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H3a3,3,0,0,1-3-3V0H2V21a1,1,0,0,0,1,1H24Z"/><rect x="14" y="11" width={size} height={size}/><rect x="6" y="11" width={size} height={size}/><rect x="18" y="6" width={size} height={size}/><rect x="10" y="6" width={size} height={size}/></svg>
);

Stats.displayName = 'Stats';
