import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSticker: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 0a12 12 0 0 0 0 24h.621l11.379-11.379v-.621a12.013 12.013 0 0 0 -12-12zm-9 12a9 9 0 0 1 17.766-2h-.266a10.5 10.5 0 0 0 -10.5 10.5v.267a9.011 9.011 0 0 1 -7-8.767z"/></svg>
);

FiBsSticker.displayName = 'FiBsSticker';
