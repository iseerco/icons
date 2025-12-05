import React from 'react';
import type { IconProps } from '../../types';

export const FiTrDiagramNested: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,13h-4c-1.93,0-3.5,1.57-3.5,3.5v1.5h-3.5c-1.93,0-3.5-1.57-3.5-3.5v-3.5h1.5c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V7.5c0,1.93,1.57,3.5,3.5,3.5h1.5v3.5c0,2.48,2.02,4.5,4.5,4.5h3.5v1.5c0,1.93,1.57,3.5,3.5,3.5h4c1.93,0,3.5-1.57,3.5-3.5v-4c0-1.93-1.57-3.5-3.5-3.5ZM1,7.5V3.5c0-1.38,1.12-2.5,2.5-2.5H7.5c1.38,0,2.5,1.12,2.5,2.5V7.5c0,1.38-1.12,2.5-2.5,2.5H3.5c-1.38,0-2.5-1.12-2.5-2.5Zm22,13c0,1.38-1.12,2.5-2.5,2.5h-4c-1.38,0-2.5-1.12-2.5-2.5v-4c0-1.38,1.12-2.5,2.5-2.5h4c1.38,0,2.5,1.12,2.5,2.5v4Z"/></svg>
);

FiTrDiagramNested.displayName = 'FiTrDiagramNested';
