import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCopyAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m17 4.879-4.879-4.879h-7.121a3 3 0 0 0 -3 3v16h15zm-12 11.121v-13h5v4h4v9zm17-6.121v14.121h-15v-3h12v-14.121z"/></svg>
);

FiBsCopyAlt.displayName = 'FiBsCopyAlt';
