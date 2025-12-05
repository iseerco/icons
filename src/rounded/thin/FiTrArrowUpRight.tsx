import React from 'react';
import type { IconProps } from '../../types';

export const FiTrArrowUpRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H10.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h10c.509,0,.982,.153,1.378,.415L.146,23.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146L22.585,2.122c.262,.395,.415,.869,.415,1.378V13.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>
);

FiTrArrowUpRight.displayName = 'FiTrArrowUpRight';
