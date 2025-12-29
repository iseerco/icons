import React from 'react';
import type { IconProps } from '../../types';

export const FiTsNotebook: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m19,3V0h-1v3h-3V0h-1v3h-4V0h-1v3h-3V0h-1v3h-2v18.5c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V3h-2Zm1,18.5c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5V4h16v17.5Zm-3-11.5H7v-1h10v1Zm0,4H7v-1h10v1Zm-4,4h-6v-1h6v1Z"/>
</svg>
);

FiTsNotebook.displayName = 'FiTsNotebook';
