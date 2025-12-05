import React from 'react';
import type { IconProps } from '../../types';

export const FiBsOutdent: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m.922,12.768c-.48-.4-.48-1.137,0-1.536l5.078-4.232v10L.922,12.768ZM0,3v3h24v-3H0Zm0,18h24v-3H0v3Zm8-10h16v-3H8v3Zm0,5h16v-3H8v3Z"/></svg>
);

FiBsOutdent.displayName = 'FiBsOutdent';
