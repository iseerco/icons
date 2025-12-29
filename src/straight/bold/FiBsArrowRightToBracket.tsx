import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowRightToBracket: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.27,13.77l-5.5,5.5-2.12-2.12,3.65-3.65H0v-3H13.29l-3.65-3.65,2.12-2.12,5.5,5.5c.97,.97,.97,2.56,0,3.54ZM20.5,0h-5V3h5c.28,0,.5,.22,.5,.5V20.5c0,.28-.22,.5-.5,.5h-5v3h5c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>
);

FiBsArrowRightToBracket.displayName = 'FiBsArrowRightToBracket';
