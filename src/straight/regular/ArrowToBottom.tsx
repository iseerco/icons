import React from 'react';
import type { IconProps } from '../../types';

export const ArrowToBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.447,22a2.578,2.578,0,0,0,.321-.263l4.95-4.95L17.3,15.373l-4.3,4.3V0H11V19.676l-4.3-4.3L5.282,16.787l4.95,4.95a2.578,2.578,0,0,0,.321.263H5v2H19V22Z"/></svg>
);

ArrowToBottom.displayName = 'ArrowToBottom';
