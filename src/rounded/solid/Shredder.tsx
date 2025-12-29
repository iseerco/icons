import React from 'react';
import type { IconProps } from '../../types';

export const Shredder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,16H4c-2.21,0-4-1.79-4-4v-1c0-2.21,1.79-4,4-4H20c2.21,0,4,1.79,4,4v1c0,2.21-1.79,4-4,4Zm-15,7v-4c0-.55-.45-1-1-1s-1,.45-1,1v4c0,.55,.45,1,1,1s1-.45,1-1Zm4,0v-4c0-.55-.45-1-1-1s-1,.45-1,1v4c0,.55,.45,1,1,1s1-.45,1-1Zm4,0v-4c0-.55-.45-1-1-1s-1,.45-1,1v4c0,.55,.45,1,1,1s1-.45,1-1Zm4,0v-4c0-.55-.45-1-1-1s-1,.45-1,1v4c0,.55,.45,1,1,1s1-.45,1-1Zm4,0v-4c0-.55-.45-1-1-1s-1,.45-1,1v4c0,.55,.45,1,1,1s1-.45,1-1Zm-2-18v-1.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v1.5h14Z"/></svg>
);

Shredder.displayName = 'Shredder';
