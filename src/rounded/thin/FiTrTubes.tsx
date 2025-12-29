import React from 'react';
import type { IconProps } from '../../types';

export const FiTrTubes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22.5,0h-9c-.276,0-.5.224-.5.5s.224.5.5.5h.5v19c0,2.206,1.794,4,4,4s4-1.794,4-4V1h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-4.5,23c-1.654,0-3-1.346-3-3v-10h6v10c0,1.654-1.346,3-3,3Zm3-14h-6V1h6v8ZM10.5,0H1.5c-.276,0-.5.224-.5.5s.224.5.5.5h.5v19c0,2.206,1.794,4,4,4s4-1.794,4-4V1h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-4.5,23c-1.654,0-3-1.346-3-3v-10h6v10c0,1.654-1.346,3-3,3Zm3-14H3V1h6v8Z"/></svg>
);

FiTrTubes.displayName = 'FiTrTubes';
