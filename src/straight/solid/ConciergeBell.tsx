import React from 'react';
import type { IconProps } from '../../types';

export const ConciergeBell: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,21v2H0v-2H11v-2H1v-3C1,10.272,5.402,5.558,11,5.051V3h-2V1h6V3h-2v2.051c5.598,.508,10,5.221,10,10.949v3H13v2h11Z"/></svg>
);

ConciergeBell.displayName = 'ConciergeBell';
