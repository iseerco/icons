import React from 'react';
import type { IconProps } from '../../types';

export const BoxCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.343,0,0,1.343,0,3v5H24V3c0-1.657-1.343-3-3-3ZM1,10v14H23V10H1Zm10.909,10.419c-.386,.387-.896,.581-1.407,.581s-1.025-.195-1.416-.586l-2.974-2.888,1.394-1.436,2.984,2.898,5.808-5.701,1.404,1.424-5.793,5.707Z"/></svg>
);

BoxCheck.displayName = 'BoxCheck';
