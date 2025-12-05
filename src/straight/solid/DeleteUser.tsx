import React from 'react';
import type { IconProps } from '../../types';

export const DeleteUser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21.414 9.957 2.543 2.543-1.414 1.414-2.543-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414zm-12.414 2.043a6 6 0 1 0 -6-6 6 6 0 0 0 6 6zm4.043 2h-8.086a4.963 4.963 0 0 0 -4.957 4.957v5.043h18v-5.043a4.963 4.963 0 0 0 -4.957-4.957z"/></svg>
);

DeleteUser.displayName = 'DeleteUser';
