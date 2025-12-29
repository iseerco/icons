import React from 'react';
import type { IconProps } from '../../types';

export const GrinTongueWink: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,16h2v.6c-.062,1.839-1.939,1.837-2,0Zm13-4A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12ZM7,11h3a1,1,0,0,0,0-2H7A1,1,0,0,0,7,11Zm10,4a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2H9v.6c.133,4.495,5.87,4.49,6,0V16h1A1,1,0,0,0,17,15Zm1-5a2,2,0,0,0-4,0c0,1,.895,1,2,1S18,11,18,10Z"/></svg>
);

GrinTongueWink.displayName = 'GrinTongueWink';
