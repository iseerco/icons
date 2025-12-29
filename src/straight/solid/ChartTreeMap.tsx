import React from 'react';
import type { IconProps } from '../../types';

export const ChartTreeMap: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,9H13v6h9c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0-9H13V6h9c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2Zm0,18H13v6h9c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-14-5H3c-1.65,0-3,1.35-3,3v8H11v-8c0-1.65-1.35-3-3-3ZM8,0H3C1.35,0,0,1.35,0,3V11H11V3c0-1.65-1.35-3-3-3Z"/></svg>
);

ChartTreeMap.displayName = 'ChartTreeMap';
