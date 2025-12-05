import React from 'react';
import type { IconProps } from '../../types';

export const KipSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,14H8.85l12.5,10h-3.2L7,15.08v8.92h-2V14H2v-2h3V0h2V10.7L18.46,0h2.93L8.54,12h13.46v2Z"/></svg>
);

KipSign.displayName = 'KipSign';
