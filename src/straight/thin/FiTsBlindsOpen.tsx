import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBlindsOpen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,6H0v-1H19v1Zm0,4H0v1H19v-1Zm0,5H0v1H19v-1ZM0,21H17v-1H0v1Zm24,.5c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5c0-1.208,.86-2.218,2-2.45V2.5c0-.827-.673-1.5-1.5-1.5H0V0H19.5c1.379,0,2.5,1.122,2.5,2.5V19.05c1.14,.232,2,1.242,2,2.45Zm-1,0c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5,.673,1.5,1.5,1.5,1.5-.673,1.5-1.5Z"/></svg>
);

FiTsBlindsOpen.displayName = 'FiTsBlindsOpen';
