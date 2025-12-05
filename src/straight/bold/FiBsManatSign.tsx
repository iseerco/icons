import React from 'react';
import type { IconProps } from '../../types';

export const FiBsManatSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,13v11h-3V13c0-3.34-2.36-6.15-5.5-6.84V24h-3V6.16c-3.14,.69-5.5,3.49-5.5,6.84v11H2V13C2,8,5.69,3.84,10.5,3.11V0h3V3.11c4.81,.73,8.5,4.88,8.5,9.89Z"/></svg>
);

FiBsManatSign.displayName = 'FiBsManatSign';
