import React from 'react';
import type { IconProps } from '../../types';

export const CircleBookmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,8v6l-3-2.25-3,2.25v-6c0-.551.448-1,1-1h4c.552,0,1,.449,1,1Zm9,4c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-7-4c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v10l5-3.75,5,3.75v-10Z"/></svg>
);

CircleBookmark.displayName = 'CircleBookmark';
