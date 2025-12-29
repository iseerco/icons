import React from 'react';
import type { IconProps } from '../../types';

export const ChessQueenAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.225,6l1.7-5.89L14,2,12,.031,10,2,6.077.11,7.775,6H6V8H18V6ZM22,24H2V23a3,3,0,0,1,3-3H19a3,3,0,0,1,3,3ZM16.357,10a50.4,50.4,0,0,0,2.327,8H5.316a50.6,50.6,0,0,0,2.327-8Z"/></svg>
);

ChessQueenAlt.displayName = 'ChessQueenAlt';
