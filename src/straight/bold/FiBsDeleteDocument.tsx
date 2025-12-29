import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDeleteDocument: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m16.061 12.061-1.94 1.939 1.94 1.939-2.122 2.122-1.939-1.94-1.939 1.94-2.122-2.122 1.94-1.939-1.94-1.939 2.122-2.122 1.939 1.94 1.939-1.94zm5.939-6.182v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>
);

FiBsDeleteDocument.displayName = 'FiBsDeleteDocument';
