import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltSquareDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM12.764,17.629c-.443,.494-1.217,.494-1.66,0l-4.236-4.629h4.132V6h2v7h4l-4.236,4.629Z"/></svg>
);

ArrowAltSquareDown.displayName = 'ArrowAltSquareDown';
