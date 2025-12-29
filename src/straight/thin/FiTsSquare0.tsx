import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSquare0: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,18c-2.206,0-4-1.794-4-4v-4c0-2.206,1.794-4,4-4s4,1.794,4,4v4c0,2.206-1.794,4-4,4Zm0-11c-1.654,0-3,1.346-3,3v4c0,1.654,1.346,3,3,3s3-1.346,3-3v-4c0-1.654-1.346-3-3-3Zm12,17H0V2.5C0,1.122,1.122,0,2.5,0H21.5c1.378,0,2.5,1.122,2.5,2.5V24ZM1,23H23V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23Z"/></svg>
);

FiTsSquare0.displayName = 'FiTsSquare0';
