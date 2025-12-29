import React from 'react';
import type { IconProps } from '../../types';

export const FiTrChartSimpleHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,9H3c-1.65,0-3,1.35-3,3s1.35,3,3,3H21c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm0,5H3c-1.1,0-2-.9-2-2s.9-2,2-2H21c1.1,0,2,.9,2,2s-.9,2-2,2ZM3,6H15c1.65,0,3-1.35,3-3s-1.35-3-3-3H3C1.35,0,0,1.35,0,3s1.35,3,3,3ZM3,1H15c1.1,0,2,.9,2,2s-.9,2-2,2H3c-1.1,0-2-.9-2-2S1.9,1,3,1Zm6,17H3c-1.65,0-3,1.35-3,3s1.35,3,3,3h6c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm0,5H3c-1.1,0-2-.9-2-2s.9-2,2-2h6c1.1,0,2,.9,2,2s-.9,2-2,2Z"/></svg>
);

FiTrChartSimpleHorizontal.displayName = 'FiTrChartSimpleHorizontal';
