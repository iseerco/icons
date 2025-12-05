import React from 'react';
import type { IconProps } from '../../types';

export const FiTsClone: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,18h1v6H0v-13.5c0-1.378,1.121-2.5,2.5-2.5h3.5v1h-3.5c-.827,0-1.5.673-1.5,1.5v12.5h14v-5ZM24,2.5v13.5H8V2.5c0-1.378,1.121-2.5,2.5-2.5h11c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5h-11c-.827,0-1.5.673-1.5,1.5v12.5h14V2.5Z"/></svg>
);

FiTsClone.displayName = 'FiTsClone';
