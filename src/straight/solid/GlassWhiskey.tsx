import React from 'react';
import type { IconProps } from '../../types';

export const GlassWhiskey: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22.49,16l-.43,4.299c-.153,1.54-1.437,2.701-2.985,2.701H4.804c-1.559,0-2.843-1.17-2.987-2.721l-.399-4.279h21.072Zm.2-2l1.301-13H.018l1.213,13h21.459Z"/></svg>
);

GlassWhiskey.displayName = 'GlassWhiskey';
