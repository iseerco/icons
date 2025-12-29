import React from 'react';
import type { IconProps } from '../../types';

export const Billboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 7c0-1.654-1.346-3-3-3h-1v-2h1v-2h-4v2h1v2h-5v-2h1v-2h-4v2h1v2h-5v-2h1v-2h-4v2h1v2h-1c-1.654 0-3 1.346-3 3v13h11v4h2v-4h11z"/></svg>
);

Billboard.displayName = 'Billboard';
