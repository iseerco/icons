import React from 'react';
import type { IconProps } from '../../types';

export const FiBsUndoAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,6H4.508l3.45-3.45L5.837.429.887,5.379a3,3,0,0,0,0,4.242l4.95,4.95L7.958,12.45,4.508,9H20.5a.5.5,0,0,1,.5.5v11a.5.5,0,0,1-.5.5H2v3H20.5A3.5,3.5,0,0,0,24,20.5V9.5A3.5,3.5,0,0,0,20.5,6Z"/></svg>
);

FiBsUndoAlt.displayName = 'FiBsUndoAlt';
