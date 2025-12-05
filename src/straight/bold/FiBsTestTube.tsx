import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTestTube: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 0h-14v3h2v16a5 5 0 0 0 10 0v-16h2zm-7 21a2 2 0 0 1 -2-2v-9h4v9a2 2 0 0 1 -2 2zm2-14h-4v-4h4z"/></svg>
);

FiBsTestTube.displayName = 'FiBsTestTube';
