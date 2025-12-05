import React from 'react';
import type { IconProps } from '../../types';

export const FiTsStats: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,23v1H2.5c-1.379,0-2.5-1.122-2.5-2.5V0h1v21.5c0,.827.673,1.5,1.5,1.5h21.5ZM7,11h-1v9h1v-9Zm4-5h-1v14h1V6Zm4,5h-1v9h1v-9Zm4-5h-1v14h1V6Z"/>
</svg>
);

FiTsStats.displayName = 'FiTsStats';
