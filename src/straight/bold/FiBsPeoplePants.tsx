import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPeoplePants: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm8,7v8.5h-2v6h-3v-6h-1v6H2v-6H0V9.5c0-1.93,1.57-3.5,3.5-3.5H7.5c1.93,0,3.5,1.57,3.5,3.5ZM3,15h5v-5.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5v5.5ZM18.5,5c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm5.5,13h-2v6h-3v-6h-1v6h-3v-6h-2V9.5c0-1.93,1.57-3.5,3.5-3.5h4c1.93,0,3.5,1.57,3.5,3.5v8.5Zm-8-3h5v-5.5c0-.28-.22-.5-.5-.5h-4c-.28,0-.5,.22-.5,.5v5.5Z"/></svg>
);

FiBsPeoplePants.displayName = 'FiBsPeoplePants';
