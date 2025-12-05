import React from 'react';
import type { IconProps } from '../../types';

export const GraduationCap: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m14.12 1.627a3.9 3.9 0 0 0 -4.24 0l-9.88 6.373 4 2.58v9.834l.293.293c.094.093 2.354 2.293 7.707 2.293s7.613-2.2 7.707-2.293l.293-.293v-9.834l2-1.29v10.71h2v-12zm3.88 17.889a10.557 10.557 0 0 1 -6 1.484 10.558 10.558 0 0 1 -6-1.483v-7.647l3.88 2.5a3.892 3.892 0 0 0 4.24 0l3.88-2.5zm-4.964-6.824a1.9 1.9 0 0 1 -2.072 0l-7.274-4.692 7.274-4.692a1.9 1.9 0 0 1 2.072 0l7.274 4.692z"/></svg>
);

GraduationCap.displayName = 'GraduationCap';
