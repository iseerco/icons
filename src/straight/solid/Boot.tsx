import React from 'react';
import type { IconProps } from '../../types';

export const Boot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m17,5H0V0h17v5Zm2.046,7.155l-4.046-1.121v-.006h-5v-2h5v-2.028H2v17h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-5.733c0-2.969-2.113-5.546-4.954-6.112Z"/>
</svg>
);

Boot.displayName = 'Boot';
