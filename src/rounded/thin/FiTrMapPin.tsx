import React from 'react';
import type { IconProps } from '../../types';

export const FiTrMapPin: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,3.14,2.425,5.724,5.5,5.979v11.521c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V11.979c3.075-.255,5.5-2.839,5.5-5.979Zm-6,5c-2.757,0-5-2.243-5-5S9.243,1,12,1s5,2.243,5,5-2.243,5-5,5Z"/></svg>
);

FiTrMapPin.displayName = 'FiTrMapPin';
