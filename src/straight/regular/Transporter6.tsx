import React from 'react';
import type { IconProps } from '../../types';

export const Transporter6: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,3.5l-2.333,1.167-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167ZM6.5,16.5l-2-1-1-2-1,2-2,1,2,1,1,2,1-2,2-1Zm-2.5,7.5h16v-2H4v2Zm13-12.5H7v2h10v-2Zm-2-9.5h-6v2h6v-2Z"/></svg>
);

Transporter6.displayName = 'Transporter6';
