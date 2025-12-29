import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTally1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m1.5,24c-.829,0-1.5-.671-1.5-1.5V1.5C0,.671.671,0,1.5,0s1.5.671,1.5,1.5v21c0,.829-.671,1.5-1.5,1.5Z"/></svg>
);

FiBrTally1.displayName = 'FiBrTally1';
