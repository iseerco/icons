import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDiagramSubtask: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,10c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4H4C1.79,0,0,1.79,0,4v2c0,2.21,1.79,4,4,4v4.5c0,3.03,2.47,5.5,5.5,5.5h.5c0,2.21,1.79,4,4,4h6c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4h-6c-1.86,0-3.41,1.28-3.86,3h-.64c-1.38,0-2.5-1.12-2.5-2.5v-4.5h13Zm-7,8c0-.55,.45-1,1-1h6c.55,0,1,.45,1,1v2c0,.55-.45,1-1,1h-6c-.55,0-1-.45-1-1v-2ZM3,6v-2c0-.55,.45-1,1-1H20c.55,0,1,.45,1,1v2c0,.55-.45,1-1,1H4c-.55,0-1-.45-1-1Z"/></svg>
);

FiBrDiagramSubtask.displayName = 'FiBrDiagramSubtask';
