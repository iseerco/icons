import React from 'react';
import type { IconProps } from '../../types';

export const FiBsQrcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,11H11V0H0V11ZM3,3h5v5H3V3ZM24,0H13V11h11V0Zm-3,8h-5V3h5v5ZM0,24H11V13H0v11Zm3-8h5v5H3v-5Zm10,4h4v4h-4v-4Zm11-7v4h-4v-4h4Zm-7,0v4h-4v-4h4Zm0,4h3v3h-3v-3Z"/></svg>
);

FiBsQrcode.displayName = 'FiBsQrcode';
