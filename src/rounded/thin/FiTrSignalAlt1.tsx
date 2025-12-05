import React from 'react';
import type { IconProps } from '../../types';

export const FiTrSignalAlt1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m6,15v6c0,1.654-1.346,3-3,3s-3-1.346-3-3v-6c0-1.654,1.346-3,3-3s3,1.346,3,3ZM24,3v18c0,1.654-1.346,3-3,3s-3-1.346-3-3V3c0-1.654,1.346-3,3-3s3,1.346,3,3Zm-1,0c0-1.103-.897-2-2-2s-2,.897-2,2v18c0,1.103.897,2,2,2s2-.897,2-2V3Zm-11,3c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3s3-1.346,3-3v-12c0-1.654-1.346-3-3-3Z"/>
</svg>
);

FiTrSignalAlt1.displayName = 'FiTrSignalAlt1';
