import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSquareKanban: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V23ZM9,5h1v7h-1V5Zm-4,0h1V15h-1V5Zm8,0h1v14h-1V5Zm4,0h1v4h-1V5Z"/></svg>
);

FiTsSquareKanban.displayName = 'FiTsSquareKanban';
