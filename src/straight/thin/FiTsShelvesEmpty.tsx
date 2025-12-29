import React from 'react';
import type { IconProps } from '../../types';

export const FiTsShelvesEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m23,0v8H1V0H0v24h1v-3h22v3h1V0h-1ZM1,20v-11h22v11H1Z"/>
</svg>
);

FiTsShelvesEmpty.displayName = 'FiTsShelvesEmpty';
