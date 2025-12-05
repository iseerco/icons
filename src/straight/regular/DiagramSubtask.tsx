import React from 'react';
import type { IconProps } from '../../types';

export const DiagramSubtask: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,10V3c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3v7H4v7c0,1.65,1.35,3,3,3h3v1c0,1.65,1.35,3,3,3h8c1.65,0,3-1.35,3-3v-7H10v4h-3c-.55,0-1-.45-1-1v-7H24Zm-12,6h10v5c0,.55-.45,1-1,1H13c-.55,0-1-.45-1-1v-5ZM2,3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v5H2V3Z"/></svg>
);

DiagramSubtask.displayName = 'DiagramSubtask';
