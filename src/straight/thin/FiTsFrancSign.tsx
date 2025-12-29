import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFrancSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6,2.5V11h12v1H6v5h7v1H6v6h-1v-6H0v-1H5V2.5c0-1.38,1.12-2.5,2.5-2.5h14.5V1H7.5c-.83,0-1.5,.67-1.5,1.5Z"/></svg>
);

FiTsFrancSign.displayName = 'FiTsFrancSign';
