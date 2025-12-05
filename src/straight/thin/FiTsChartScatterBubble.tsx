import React from 'react';
import type { IconProps } from '../../types';

export const FiTsChartScatterBubble: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H2.5c-1.38,0-2.5-1.12-2.5-2.5V0H1V21.5c0,.83,.67,1.5,1.5,1.5H24v1Zm-3-20c0-1.65-1.35-3-3-3s-3,1.35-3,3,1.35,3,3,3,3-1.35,3-3Zm-1,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm0,10c0-1.65-1.35-3-3-3s-3,1.35-3,3,1.35,3,3,3,3-1.35,3-3Zm-1,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM11,7.5c0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5,2.5-1.12,2.5-2.5Zm-1,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm0,9c0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5,2.5-1.12,2.5-2.5Zm-1,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Z"/></svg>
);

FiTsChartScatterBubble.displayName = 'FiTsChartScatterBubble';
