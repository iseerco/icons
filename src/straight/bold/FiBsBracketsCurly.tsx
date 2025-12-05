import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBracketsCurly: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.62,12l-3.62,3.62v4.88c0,1.93-1.57,3.5-3.5,3.5h-2.5v-3h2.5c.28,0,.5-.22,.5-.5v-6.12l2.38-2.38-2.38-2.38V3.5c0-.28-.22-.5-.5-.5h-2.5V0h2.5c1.93,0,3.5,1.57,3.5,3.5v4.88l3.62,3.62ZM4,3.5v4.88L.38,12l3.62,3.62v4.88c0,1.93,1.57,3.5,3.5,3.5h2.5v-3h-2.5c-.28,0-.5-.22-.5-.5v-6.12l-2.38-2.38,2.38-2.38V3.5c0-.28,.22-.5,.5-.5h2.5V0h-2.5c-1.93,0-3.5,1.57-3.5,3.5Z"/></svg>
);

FiBsBracketsCurly.displayName = 'FiBsBracketsCurly';
