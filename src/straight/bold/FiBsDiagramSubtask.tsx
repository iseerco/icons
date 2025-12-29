import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDiagramSubtask: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,10V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v6.5H4v7c0,1.93,1.57,3.5,3.5,3.5h2.5c0,1.93,1.57,3.5,3.5,3.5h7c1.93,0,3.5-1.57,3.5-3.5v-6.5H10v3.5h-2.5c-.28,0-.5-.22-.5-.5v-7H24Zm-11,7h8v3.5c0,.28-.22,.5-.5,.5h-7c-.28,0-.5-.22-.5-.5v-3.5ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v3.5H3V3.5Z"/></svg>
);

FiBsDiagramSubtask.displayName = 'FiBsDiagramSubtask';
