import React from 'react';
import type { IconProps } from '../../types';

export const UserLock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m8,12c-3.309,0-6-2.691-6-6S4.691,0,8,0s6,2.691,6,6-2.691,6-6,6Zm14,2v-1c0-2.206-1.794-4-4-4s-4,1.794-4,4v1h-2v7c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3v-7h-2Zm-6-1c0-1.103.897-2,2-2s2,.897,2,2v1h-4v-1Zm3,7h-2v-2h2v2Zm-9,1v-7h-5c-2.757,0-5,2.243-5,5v5h11.003c-.629-.836-1.003-1.875-1.003-3Z"/>
</svg>
);

UserLock.displayName = 'UserLock';
