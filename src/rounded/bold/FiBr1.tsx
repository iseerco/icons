import React from 'react';
import type { IconProps } from '../../types';

export const FiBr1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,24c-.829,0-1.5-.671-1.5-1.5V3.952l-4.322,5.477c-.514,.65-1.456,.761-2.107,.249-.65-.514-.762-1.457-.249-2.107,0,0,5.369-6.797,5.41-6.838C11.451,.015,12.52-.197,13.457,.19c.937,.388,1.543,1.295,1.543,2.31V22.5c0,.829-.671,1.5-1.5,1.5Z"/></svg>
);

FiBr1.displayName = 'FiBr1';
