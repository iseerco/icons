import React from 'react';
import type { IconProps } from '../../types';

export const Text: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm-3 10h-2v-2h-3v8h2v2h-6v-2h2v-8h-3v2h-2v-4h12z"/></svg>
);

Text.displayName = 'Text';
