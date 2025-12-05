import React from 'react';
import type { IconProps } from '../../types';

export const RulerCombined: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,14h-.5v3c0,.553-.447,1-1,1s-1-.447-1-1v-3h-2v3c0,.553-.447,1-1,1s-1-.447-1-1v-3h-2v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-2h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-2h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-.5c0-1.933-1.567-3.5-3.5-3.5H3.5C1.567,0,0,1.567,0,3.5v15.5c0,2.761,2.239,5,5,5h15.5c1.933,0,3.5-1.567,3.5-3.5v-3c0-1.933-1.567-3.5-3.5-3.5Z"/></svg>
);

RulerCombined.displayName = 'RulerCombined';
