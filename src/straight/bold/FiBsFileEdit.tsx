import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileEdit: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,8V3H3v18h7.996v3H0V3C0,1.346,1.346,0,3,0h11.381l5.619,5.665v5.772c-.409.198-.799.45-1.139.789l-1.861,1.861v-6.086h-5Zm11.361,5.639c-.852-.852-2.234-.852-3.086,0l-7.275,7.275v3.086h3.086l7.275-7.275c.852-.852.852-2.234,0-3.086Z"/></svg>
);

FiBsFileEdit.displayName = 'FiBsFileEdit';
