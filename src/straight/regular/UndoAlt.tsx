import React from 'react';
import type { IconProps } from '../../types';

export const UndoAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.9,7.005H2.793L7.1,2.7,5.682,1.288.732,6.237a2.5,2.5,0,0,0,0,3.535l4.95,4.951L7.1,13.309l-4.3-4.3H20.9a1.034,1.034,0,0,1,1.1.95v11.1a1.034,1.034,0,0,1-1.1.949H2v2H20.9A3.031,3.031,0,0,0,24,21.056V9.955A3.031,3.031,0,0,0,20.9,7.005Z"/></svg>
);

UndoAlt.displayName = 'UndoAlt';
