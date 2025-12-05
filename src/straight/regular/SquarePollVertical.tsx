import React from 'react';
import type { IconProps } from '../../types';

export const SquarePollVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm1,22H2V3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V22ZM9,8h2v11h-2V8Zm-4,3h2v8h-2V11ZM13,5h2v14h-2V5Zm4,10h2v4h-2v-4Z"/></svg>
);

SquarePollVertical.displayName = 'SquarePollVertical';
