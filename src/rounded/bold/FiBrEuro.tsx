import React from 'react';
import type { IconProps } from '../../types';

export const FiBrEuro: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20.943 17.727a8.989 8.989 0 0 1 -14.993-1.727h8.55a1.5 1.5 0 0 0 0-3h-9.441a8.5 8.5 0 0 1 0-2h9.441a1.5 1.5 0 0 0 0-3h-8.55a8.989 8.989 0 0 1 14.993-1.727 1.5 1.5 0 1 0 2.314-1.91 11.989 11.989 0 0 0 -20.557 3.637h-1.2a1.5 1.5 0 0 0 0 3h.551c-.028.331-.051.662-.051 1s.023.669.051 1h-.551a1.5 1.5 0 0 0 0 3h1.2a11.989 11.989 0 0 0 20.557 3.637 1.5 1.5 0 1 0 -2.314-1.91z"/></svg>
);

FiBrEuro.displayName = 'FiBrEuro';
