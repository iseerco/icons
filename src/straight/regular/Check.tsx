import React from 'react';
import type { IconProps } from '../../types';

export const Check: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M7.8,20.53a2.99,2.99,0,0,1-2.121-.877L.086,14.061,1.5,12.646l5.593,5.593a1,1,0,0,0,1.414,0L22.5,4.246,23.914,5.66,9.921,19.653A2.99,2.99,0,0,1,7.8,20.53Z"/></g></svg>
);

Check.displayName = 'Check';
