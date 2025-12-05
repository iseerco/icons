import React from 'react';
import type { IconProps } from '../../types';

export const FiBsKipSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.35,24L7,15.72v8.28h-3V14.5H2v-3h2V0h3V10.02L17.73,0h4.4L9.81,11.5h12.19v3H10.28l11.88,9.5h-4.8Z"/></svg>
);

FiBsKipSign.displayName = 'FiBsKipSign';
