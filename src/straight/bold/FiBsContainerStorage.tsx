import React from 'react';
import type { IconProps } from '../../types';

export const FiBsContainerStorage: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,6v-3H0v3h1v12H0v3h24v-3h-1V6h1Zm-4,12H4V6h16v12Zm-2-2h-3v-8h3v8Zm-4.5,0h-3v-8h3v8Zm-7.5,0v-8h3v8h-3Z"/>
</svg>
);

FiBsContainerStorage.displayName = 'FiBsContainerStorage';
