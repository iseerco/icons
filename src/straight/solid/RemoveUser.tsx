import React from 'react';
import type { IconProps } from '../../types';

export const RemoveUser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m3 6a6 6 0 1 1 6 6 6 6 0 0 1 -6-6zm10.043 8h-8.086a4.963 4.963 0 0 0 -4.957 4.957v5.043h18v-5.043a4.963 4.963 0 0 0 -4.957-4.957zm2.957-4v2h8v-2z"/></svg>
);

RemoveUser.displayName = 'RemoveUser';
