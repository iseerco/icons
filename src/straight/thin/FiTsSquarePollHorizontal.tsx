import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSquarePollHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V23ZM8,13h11v1H8v-1Zm3,4h8v1H11v-1ZM5,9h14v1H5v-1ZM15,5h4v1h-4v-1Z"/></svg>
);

FiTsSquarePollHorizontal.displayName = 'FiTsSquarePollHorizontal';
