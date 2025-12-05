import React from 'react';
import type { IconProps } from '../../types';

export const FiBsStarOfDavid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19.077,12l3.556-6h-7.111L11.999.056l-3.517,5.944H1.381l3.55,6-3.55,6h7.101l3.517,5.944,3.522-5.944h7.111l-3.556-6Zm-2.292,0l-2.37,4h-4.826l-2.367-4,2.367-4h4.826l2.37,4Z"/></svg>
);

FiBsStarOfDavid.displayName = 'FiBsStarOfDavid';
