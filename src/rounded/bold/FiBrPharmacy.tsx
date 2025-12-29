import React from 'react';
import type { IconProps } from '../../types';

export const FiBrPharmacy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 24a4 4 0 0 1 -4-4v-4h-4a4 4 0 0 1 0-8h4v-4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1 -4 4zm-8-13a1 1 0 0 0 0 2h5.5a1.5 1.5 0 0 1 1.5 1.5v5.5a1 1 0 0 0 2 0v-5.5a1.5 1.5 0 0 1 1.5-1.5h5.5a1 1 0 0 0 0-2h-5.5a1.5 1.5 0 0 1 -1.5-1.5v-5.5a1 1 0 0 0 -2 0v5.5a1.5 1.5 0 0 1 -1.5 1.5z"/></svg>
);

FiBrPharmacy.displayName = 'FiBrPharmacy';
