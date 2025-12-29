import React from 'react';
import type { IconProps } from '../../types';

export const HatChef: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M.164,4.705C.928,1.592,5.211-.055,7.84,1.621a6.16,6.16,0,0,1,8.32,0c6.436-3.279,11.424,6.113,4.514,9.092a.934.934,0,0,0-.674.851V17H4V11.564a.934.934,0,0,0-.674-.851A5.017,5.017,0,0,1,.164,4.705ZM4,19a4.559,4.559,0,0,0,4.5,5h7A4.559,4.559,0,0,0,20,19Z"/></svg>
);

HatChef.displayName = 'HatChef';
