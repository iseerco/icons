import React from 'react';
import type { IconProps } from '../../types';

export const FiBrP: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3.5,24c-.829,0-1.5-.672-1.5-1.5V5.5C2,2.468,4.467,0,7.5,0h7c9.929,.353,9.922,14.65,0,15H5v7.5c0,.828-.671,1.5-1.5,1.5Zm1.5-12H14.5c5.935-.156,5.931-8.846,0-9H7.5c-1.378,0-2.5,1.121-2.5,2.5v6.5Z"/></svg>
);

FiBrP.displayName = 'FiBrP';
