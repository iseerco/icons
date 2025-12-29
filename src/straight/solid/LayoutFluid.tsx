import React from 'react';
import type { IconProps } from '../../types';

export const LayoutFluid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,0H3A3,3,0,0,0,0,3v8H15V0Z"/><path d="M21,0H17V11h7V3a3,3,0,0,0-3-3Z"/><path d="M7,13H0v8a3,3,0,0,0,3,3H7V13Z"/><path d="M24,13H9V24H21a3,3,0,0,0,3-3V13Z"/></svg>
);

LayoutFluid.displayName = 'LayoutFluid';
