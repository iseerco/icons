import React from 'react';
import type { IconProps } from '../../types';

export const FiTsRhombus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m12,24L0,12,12,0l12,12-12,12ZM1.414,12l10.586,10.586,10.586-10.586L12,1.414,1.414,12Z"/>
</svg>
);

FiTsRhombus.displayName = 'FiTsRhombus';
