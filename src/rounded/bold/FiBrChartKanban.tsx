import React from 'react';
import type { IconProps } from '../../types';

export const FiBrChartKanban: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m6,3v13c0,1.657-1.343,3-3,3s-3-1.343-3-3V3C0,1.343,1.343,0,3,0s3,1.343,3,3ZM21,0c-1.657,0-3,1.343-3,3v18c0,1.657,1.343,3,3,3s3-1.343,3-3V3c0-1.657-1.343-3-3-3Zm-9,0c-1.657,0-3,1.343-3,3v7c0,1.657,1.343,3,3,3s3-1.343,3-3V3c0-1.657-1.343-3-3-3Z"/>
</svg>
);

FiBrChartKanban.displayName = 'FiBrChartKanban';
