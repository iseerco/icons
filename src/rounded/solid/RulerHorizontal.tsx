import React from 'react';
import type { IconProps } from '../../types';

export const RulerHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.609,6.96H3.5c-1.933,0-3.5,1.567-3.5,3.5v3.04c0,1.933,1.567,3.5,3.5,3.5h1.524v-3c0-.553,.447-1,1-1s1,.447,1,1v3h2.021v-3c0-.553,.447-1,1-1s1,.447,1,1v3h2.02v-3c0-.553,.447-1,1-1s1,.447,1,1v3h2.021v-3c0-.553,.447-1,1-1s1,.447,1,1v3h1.524c1.933,0,3.5-1.567,3.5-3.5v-3.04c0-1.933-1.567-3.5-3.5-3.5Z"/></svg>
);

RulerHorizontal.displayName = 'RulerHorizontal';
