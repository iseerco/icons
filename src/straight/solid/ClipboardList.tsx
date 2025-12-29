import React from 'react';
import type { IconProps } from '../../types';

export const ClipboardList: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416,.836-2.829,2H3V21c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm-6.829,16h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm8,8h-6v-2h6v2Zm0-4h-6v-2h6v2Zm0-4h-6v-2h6v2Z"/></svg>
);

ClipboardList.displayName = 'ClipboardList';
