import React from 'react';
import type { IconProps } from '../../types';

export const CloudCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m17.791 7.209a8 8 0 0 0 -15.791 1.791 7.912 7.912 0 0 0 .9 3.671 5.49 5.49 0 0 0 2.6 10.329h10.5a8 8 0 0 0 1.791-15.791zm-3.978 11.912a3 3 0 0 1 -4.242 0l-3.384-3.384 1.413-1.414 3.384 3.384a1.023 1.023 0 0 0 1.414 0l5.654-5.654 1.414 1.414z"/></svg>
);

CloudCheck.displayName = 'CloudCheck';
