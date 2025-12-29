import React from 'react';
import type { IconProps } from '../../types';

export const FiTsClawMarks: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,0s14,10.5,24,24C15,15.5,7.5,8.5,0,0Zm23.964,14.885C18,5,9.08,0,9.08,0c5.42,6,8.42,8.5,14.885,14.885ZM0,9c6,7,9,10,15,15C8.5,15,0,9,0,9Z"/></svg>
);

FiTsClawMarks.displayName = 'FiTsClawMarks';
