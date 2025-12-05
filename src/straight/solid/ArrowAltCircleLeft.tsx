import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltCircleLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm6,13h-7v4.056l-4.629-4.236c-.494-.443-.494-1.217,0-1.66l4.629-4.236v4.077h7v2Z"/></svg>
);

ArrowAltCircleLeft.displayName = 'ArrowAltCircleLeft';
