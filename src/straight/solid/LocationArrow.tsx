import React from 'react';
import type { IconProps } from '../../types';

export const LocationArrow: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m12.895,24.001c-.172,0-.346-.016-.521-.046-1.398-.245-2.374-1.408-2.374-2.827v-7.128H2.871c-1.419,0-2.581-.977-2.826-2.374-.244-1.395.513-2.705,1.841-3.189L24.028-.014l-8.468,22.137c-.417,1.151-1.474,1.878-2.666,1.878Z"/>
</svg>
);

LocationArrow.displayName = 'LocationArrow';
