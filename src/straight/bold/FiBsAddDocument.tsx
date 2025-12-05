import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAddDocument: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m13.5 12.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3zm8.5-6.621v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>
);

FiBsAddDocument.displayName = 'FiBsAddDocument';
