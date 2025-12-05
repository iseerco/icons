import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWindowRestore: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.5,6H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H18V9.5c0-1.93-1.57-3.5-3.5-3.5ZM3,21V11H15v10H3ZM24,3.5v14.5h-4v-3h1V3.5c0-.28-.22-.5-.5-.5H9.5c-.28,0-.5,.22-.5,.5v.5h-3v-.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5Z"/></svg>
);

FiBsWindowRestore.displayName = 'FiBsWindowRestore';
