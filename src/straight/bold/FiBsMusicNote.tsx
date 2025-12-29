import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMusicNote: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15,0c-1.654,0-3,1.346-3,3v10.602c-.751-.385-1.6-.602-2.5-.602-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5V3h5V0h-5Zm-5.5,21c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Z"/>
</svg>
);

FiBsMusicNote.displayName = 'FiBsMusicNote';
