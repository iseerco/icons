import React from 'react';
import type { IconProps } from '../../types';

export const PianoKeyboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m0,12v-7c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v7H0Zm19,2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4H0v8h24v-8h-5Z"/>
</svg>
);

PianoKeyboard.displayName = 'PianoKeyboard';
