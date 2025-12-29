import React from 'react';
import type { IconProps } from '../../types';

export const CopyAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18 5.086-5.086-5.086h-7.914a3 3 0 0 0 -3 3v17h16zm-14 12.914v-15a1 1 0 0 1 1-1h7v4h4v12zm18-9v15h-15v-2h13v-15z"/></svg>
);

CopyAlt.displayName = 'CopyAlt';
