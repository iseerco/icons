import React from 'react';
import type { IconProps } from '../../types';

export const FiTrChartGantt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.5,24H4.5c-2.48,0-4.5-2.02-4.5-4.5V.5C0,.22,.22,0,.5,0s.5,.22,.5,.5V19.5c0,1.93,1.57,3.5,3.5,3.5H23.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Zm.5-6.5c0-.28-.22-.5-.5-.5h-6c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h6c.28,0,.5-.22,.5-.5Zm-5-6c0-.28-.22-.5-.5-.5H9.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h9c.28,0,.5-.22,.5-.5Zm-7-6c0-.28-.22-.5-.5-.5H5.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h6c.28,0,.5-.22,.5-.5Z"/></svg>
);

FiTrChartGantt.displayName = 'FiTrChartGantt';
