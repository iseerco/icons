import React from 'react';
import type { IconProps } from '../../types';

export const FileChartLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.414,5h-4.414V.586l4.414,4.414Zm.586,2V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-13,9h-2v4h2v-4Zm4-5h-2v9h2V11Zm4,3h-2v6h2v-6Z"/></svg>
);

FileChartLine.displayName = 'FileChartLine';
