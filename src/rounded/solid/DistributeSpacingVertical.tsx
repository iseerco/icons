import React from 'react';
import type { IconProps } from '../../types';

export const DistributeSpacingVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,4H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm1,17c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1Zm-4-7.5v-3c0-1.93-1.57-3.5-3.5-3.5H7.5c-1.93,0-3.5,1.57-3.5,3.5v3c0,1.93,1.57,3.5,3.5,3.5h9c1.93,0,3.5-1.57,3.5-3.5Z"/></svg>
);

DistributeSpacingVertical.displayName = 'DistributeSpacingVertical';
