import React from 'react';
import type { IconProps } from '../../types';

export const FiBrGripLines: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,8.5c0-.829.671-1.5,1.5-1.5h21c.829,0,1.5.671,1.5,1.5s-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.671-1.5-1.5Zm22.5,5.5H1.5c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h21c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Z"/></svg>
);

FiBrGripLines.displayName = 'FiBrGripLines';
