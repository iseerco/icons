import React from 'react';
import type { IconProps } from '../../types';

export const ShekelSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,24h-6V7h2v15h4c3.309,0,6-2.691,6-6V0h2V16c0,4.411-3.589,8-8,8Zm-10,0H2V0h6c4.411,0,8,3.589,8,8v9h-2V8c0-3.309-2.691-6-6-6H4V24Z"/></svg>
);

ShekelSign.displayName = 'ShekelSign';
