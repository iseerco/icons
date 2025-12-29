import React from 'react';
import type { IconProps } from '../../types';

export const CocktailAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,0V1A5.519,5.519,0,0,0,.9,4H16.758l-2,2H2.813L11,13.443V22H6v2H18V22H13V13.443l9.193-8.358A5.53,5.53,0,0,0,24,1V0Z"/></svg>
);

CocktailAlt.displayName = 'CocktailAlt';
