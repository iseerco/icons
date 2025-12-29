import React from 'react';
import type { IconProps } from '../../types';

export const FiTrMusicNote: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m20.5,0h-2.5c-2.206,0-4,1.794-4,4v11.342c-.996-1.415-2.642-2.342-4.5-2.342-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5V4c0-1.654,1.346-3,3-3h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-11,23c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Z"/>
</svg>
);

FiTrMusicNote.displayName = 'FiTrMusicNote';
