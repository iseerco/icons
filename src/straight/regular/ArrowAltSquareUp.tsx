import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltSquareUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,11h-4v7h-2v-7H6.868l4.236-4.629c.443-.494,1.217-.494,1.66,0l4.236,4.629ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1V22H22V3Z"/></svg>
);

ArrowAltSquareUp.displayName = 'ArrowAltSquareUp';
