import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBarberPole: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m19,6v-3h-1.812c-1.039-1.79-2.973-3-5.188-3s-4.149,1.21-5.188,3h-1.812v3h1v12h-1v3h1.812c1.039,1.79,2.973,3,5.188,3s4.149-1.21,5.188-3h1.812v-3h-1V6h1Zm-4,10.379l-6-6v-2.758l6,6v2.758Zm-6-1.758l3.379,3.379h-3.379v-3.379Zm6-5.242l-3.379-3.379h3.379v3.379Z"/>
</svg>
);

FiBsBarberPole.displayName = 'FiBsBarberPole';
