import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBringFront: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,18H6V9.5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v8.5Zm-9-3h6v-5.5c0-.28-.22-.5-.5-.5h-5c-.28,0-.5,.22-.5,.5v5.5Zm-5-6h-1V3.5c0-.28,.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5v.5h3v-.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V12H4v-3Zm20,6.5c0-1.93-1.57-3.5-3.5-3.5h-.5v3h.5c.28,0,.5,.22,.5,.5v5.5h-6v-1h-3v4h12V15.5Z"/></svg>
);

FiBsBringFront.displayName = 'FiBsBringFront';
