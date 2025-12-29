import React from 'react';
import type { IconProps } from '../../types';

export const FiBsStarChristmas: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.913,14.893l7.026-2.893-7.026-2.893,3.587-5.607-5.607,3.587L12,.06l-2.893,7.027L3.5,3.5l3.587,5.607L.061,12l7.026,2.893-3.587,5.607,5.607-3.587,2.893,7.027,2.893-7.027,5.607,3.587-3.587-5.607Zm-4.913,1.167l-1.184-2.875-2.877-1.185,2.877-1.185,1.184-2.875,1.184,2.875,2.877,1.185-2.877,1.185-1.184,2.875Z"/></svg>
);

FiBsStarChristmas.displayName = 'FiBsStarChristmas';
