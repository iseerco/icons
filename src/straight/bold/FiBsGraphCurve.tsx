import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGraphCurve: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m4.175,21h19.825v3H0V0h3v15.144c3.143-5.943,9.656-10.144,17-10.144v-3l3.696,3.793c.405.391.405,1.024,0,1.414l-3.696,3.793v-3c-7.802,0-14.708,5.878-15.825,13Z"/>
</svg>
);

FiBsGraphCurve.displayName = 'FiBsGraphCurve';
