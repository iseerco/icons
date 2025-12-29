import React from 'react';
import type { IconProps } from '../../types';

export const CursorFinger: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m13 2.58a2.564 2.564 0 0 0 -2.087-2.546 2.5 2.5 0 0 0 -2.913 2.466v14.5h-2v-5.389l-3.121 3.025a3 3 0 0 0 -.828 2.682 3.129 3.129 0 0 0 .9 1.637l5.049 5.045h14v-13.806l-9-2.014z"/></svg>
);

CursorFinger.displayName = 'CursorFinger';
