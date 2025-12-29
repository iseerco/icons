import React from 'react';
import type { IconProps } from '../../types';

export const PageBreak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.414,5h-4.414V.586l4.414,4.414Zm-4.414,8v2h5v9H2V15H7v-2H2V3C2,1.343,3.343,0,5,0H15V7h7v6h-5Zm-2,0h-6v2h6v-2Z"/></svg>
);

PageBreak.displayName = 'PageBreak';
