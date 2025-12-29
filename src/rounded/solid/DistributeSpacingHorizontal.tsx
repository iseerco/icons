import React from 'react';
import type { IconProps } from '../../types';

export const DistributeSpacingHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,24c-.55,0-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1V23c0,.55-.45,1-1,1Zm-17-1V1c0-.55-.45-1-1-1s-1,.45-1,1V23c0,.55,.45,1,1,1s1-.45,1-1Zm13-6.5V7.5c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v9c0,1.93,1.57,3.5,3.5,3.5h3c1.93,0,3.5-1.57,3.5-3.5Z"/></svg>
);

DistributeSpacingHorizontal.displayName = 'DistributeSpacingHorizontal';
