import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowDownLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.99,.71L23.29,0,1,22.29V10H0v12.5c0,.83,.67,1.5,1.5,1.5H14v-1H1.71L23.99,.71Z"/></svg>
);

FiTsArrowDownLeft.displayName = 'FiTsArrowDownLeft';
