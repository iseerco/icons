import React from 'react';
import type { IconProps } from '../../types';

export const FiTrSignalAlt2: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,3v18c0,1.654-1.346,3-3,3s-3-1.346-3-3V3c0-1.654,1.346-3,3-3s3,1.346,3,3Zm-12,3c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3s3-1.346,3-3v-12c0-1.654-1.346-3-3-3ZM3,12c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3s3-1.346,3-3v-6c0-1.654-1.346-3-3-3Z"/>
</svg>
);

FiTrSignalAlt2.displayName = 'FiTrSignalAlt2';
