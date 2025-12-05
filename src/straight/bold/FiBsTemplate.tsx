import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTemplate: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.38,0H5c-1.65,0-3,1.35-3,3V24H22V5.66L16.38,0ZM5,21V3H14v5h5v13H5Zm2-11h10v9H7V10Zm5-2H7v-3h5v3Z"/></svg>
);

FiBsTemplate.displayName = 'FiBsTemplate';
