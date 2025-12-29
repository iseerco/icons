import React from 'react';
import type { IconProps } from '../../types';

export const FiTrChartSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0c-1.65,0-3,1.35-3,3V21c0,1.65,1.35,3,3,3s3-1.35,3-3V3c0-1.65-1.35-3-3-3Zm2,21c0,1.1-.9,2-2,2s-2-.9-2-2V3c0-1.1,.9-2,2-2s2,.9,2,2V21Zm7-15c-1.65,0-3,1.35-3,3v12c0,1.65,1.35,3,3,3s3-1.35,3-3V9c0-1.65-1.35-3-3-3Zm2,15c0,1.1-.9,2-2,2s-2-.9-2-2V9c0-1.1,.9-2,2-2s2,.9,2,2v12ZM3,12c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3s3-1.35,3-3v-6c0-1.65-1.35-3-3-3Zm2,9c0,1.1-.9,2-2,2s-2-.9-2-2v-6c0-1.1,.9-2,2-2s2,.9,2,2v6Z"/></svg>
);

FiTrChartSimple.displayName = 'FiTrChartSimple';
