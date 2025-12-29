import React from 'react';
import type { IconProps } from '../../types';

export const BellConcierge: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,18v-4c0-6.28-4.849-11.448-11-11.958V0h-2v2.042C4.849,2.552,0,7.72,0,14v4h11v2H0v2h24v-2h-11v-2h11Z"/></svg>
);

BellConcierge.displayName = 'BellConcierge';
