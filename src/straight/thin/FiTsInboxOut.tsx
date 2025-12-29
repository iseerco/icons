import React from 'react';
import type { IconProps } from '../../types';

export const FiTsInboxOut: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,13v1.5c0,1.379-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.121-2.5-2.5v-1.5H0v8.5c0,1.379,1.121,2.5,2.5,2.5H21.5c1.379,0,2.5-1.121,2.5-2.5V13h-7Zm6,8.5c0,.827-.673,1.5-1.5,1.5H2.5c-.827,0-1.5-.673-1.5-1.5v-7.5H6v.5c0,1.93,1.57,3.5,3.5,3.5h5c1.93,0,3.5-1.57,3.5-3.5v-.5h5v7.5ZM8.354,4.439l-.707-.707L10.939,.439c.584-.584,1.537-.584,2.121,0l3.293,3.293-.707,.707-3.146-3.146V11h-1V1.293l-3.146,3.146Z"/></svg>
);

FiTsInboxOut.displayName = 'FiTsInboxOut';
