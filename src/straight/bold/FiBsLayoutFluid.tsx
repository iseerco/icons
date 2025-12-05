import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLayoutFluid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,11H0V3A3,3,0,0,1,3,0H15Z"/><path d="M24,11H17V0h4a3,3,0,0,1,3,3Z"/><path d="M7,24H3a3,3,0,0,1-3-3V13H7Z"/><path d="M21,24H9V13H24v8A3,3,0,0,1,21,24Z"/></svg>
);

FiBsLayoutFluid.displayName = 'FiBsLayoutFluid';
