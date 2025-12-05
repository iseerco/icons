import React from 'react';
import type { IconProps } from '../../types';

export const PointOfSale: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,4v-1c0-1.654-1.346-3-3-3H6c-1.654,0-3,1.346-3,3v21h18v-4h2V4h-2Zm-12,16h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4H7v-4h10v4Z"/>
</svg>
);

PointOfSale.displayName = 'PointOfSale';
