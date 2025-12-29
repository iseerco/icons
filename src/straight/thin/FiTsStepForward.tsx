import React from 'react';
import type { IconProps } from '../../types';

export const FiTsStepForward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20,0v11.399L3,.066v23.868l17-11.333v11.399h1V0h-1ZM4,22.066V1.934l15.099,10.066-15.099,10.066Z"/></svg>
);

FiTsStepForward.displayName = 'FiTsStepForward';
