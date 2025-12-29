import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTransporter6: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,3.5l-2.333,1.167-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167ZM6.5,16.5l-2-1-1-2-1,2-2,1,2,1,1,2,1-2,2-1Zm-2.5,7.5h16v-3H4v3Zm13-13H7v3h10v-3ZM15,1h-6v3h6V1Z"/></svg>
);

FiBsTransporter6.displayName = 'FiBsTransporter6';
