import React from 'react';
import type { IconProps } from '../../types';

export const FiBrEquals: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m0,7.5c0-.829.671-1.5,1.5-1.5h21c.829,0,1.5.671,1.5,1.5s-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.671-1.5-1.5Zm22.5,7.5H1.5c-.829,0-1.5.672-1.5,1.5s.671,1.5,1.5,1.5h21c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/>
</svg>
);

FiBrEquals.displayName = 'FiBrEquals';
