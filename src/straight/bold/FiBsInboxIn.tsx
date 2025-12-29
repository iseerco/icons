import React from 'react';
import type { IconProps } from '../../types';

export const FiBsInboxIn: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.015,10.591c.544,.545,1.427,.545,1.972,0h0l4.594-4.592h-4.082V0h-3V6H6.418l4.597,4.591Z"/><path d="M15.5,11v2.636c-.001,.753-.611,1.363-1.364,1.364h-4.272c-.753-.001-1.363-.611-1.364-1.364v-2.636H0v10c0,1.657,1.343,3,3,3H21c1.657,0,3-1.343,3-3V11H15.5Zm5.5,10H3v-7h2.515c.192,2.26,2.081,3.997,4.349,4h4.272c2.268-.003,4.157-1.74,4.349-4h2.515v7Z"/></svg>
);

FiBsInboxIn.displayName = 'FiBsInboxIn';
