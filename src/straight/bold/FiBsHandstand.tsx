import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHandstand: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m16 13.675v-13.675h-3v6h-2v-6h-3v13.675l-4.693 10.325h3.295l3.182-7h4.432l3.182 7h3.295zm-3-4.675v5h-2v-5zm1.5 12.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5z"/></svg>
);

FiBsHandstand.displayName = 'FiBsHandstand';
