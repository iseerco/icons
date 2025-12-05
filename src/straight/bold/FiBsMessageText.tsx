import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMessageText: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,5h10v3h-3.5v8h-3v-8h-3.5v-3Zm17-1.5v16.5h-6.672l-3.708,3.065c-.448.399-1.024.601-1.606.601-.595,0-1.196-.21-1.675-.636l-3.598-3.03H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v13.5h4.836l4.167,3.511,4.246-3.511h4.751V3.5Z"/></svg>
);

FiBsMessageText.displayName = 'FiBsMessageText';
