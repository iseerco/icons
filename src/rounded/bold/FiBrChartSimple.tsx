import React from 'react';
import type { IconProps } from '../../types';

export const FiBrChartSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,3V21c0,1.66-1.34,3-3,3s-3-1.34-3-3V3c0-1.66,1.34-3,3-3s3,1.34,3,3Zm6,3c-1.66,0-3,1.34-3,3v12c0,1.66,1.34,3,3,3s3-1.34,3-3V9c0-1.66-1.34-3-3-3ZM3,12c-1.66,0-3,1.34-3,3v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6c0-1.66-1.34-3-3-3Z"/></svg>
);

FiBrChartSimple.displayName = 'FiBrChartSimple';
