import React from 'react';
import type { IconProps } from '../../types';

export const ChessQueenAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,20H20a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2H2A2,2,0,0,1,4,20ZM7,8H17a1,1,0,0,0,0-2H15.516l1.71-2.954a1.423,1.423,0,0,0-.413-1.72,1.392,1.392,0,0,0-1.7-.069l-1.11.6L12.932.448A1.5,1.5,0,0,0,10.745.5L9.717,1.855,8.672,1.3A1.442,1.442,0,0,0,6.515,3.091L8.2,6H7A1,1,0,0,0,7,8ZM18.672,18A44.865,44.865,0,0,1,16.3,10H7.7a44.865,44.865,0,0,1-2.374,8Z"/></svg>
);

ChessQueenAlt.displayName = 'ChessQueenAlt';
