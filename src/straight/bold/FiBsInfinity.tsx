import React from 'react';
import type { IconProps } from '../../types';

export const FiBsInfinity: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m17.954 5.954c-2.693 0-4.726 1.838-5.954 3.364-1.228-1.526-3.261-3.364-5.954-3.364a6.046 6.046 0 0 0 0 12.092c2.693 0 4.726-1.838 5.954-3.364 1.228 1.526 3.261 3.364 5.954 3.364a6.046 6.046 0 0 0 0-12.092zm-11.908 9.092a3.046 3.046 0 0 1 0-6.092c1.816 0 3.407 1.821 4.213 3.046-.806 1.225-2.397 3.046-4.213 3.046zm11.908 0c-1.816 0-3.407-1.821-4.213-3.046.806-1.225 2.4-3.046 4.213-3.046a3.046 3.046 0 0 1 0 6.092z"/></svg>
);

FiBsInfinity.displayName = 'FiBsInfinity';
