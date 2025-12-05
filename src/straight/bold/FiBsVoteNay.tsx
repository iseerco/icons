import React from 'react';
import type { IconProps } from '../../types';

export const FiBsVoteNay: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,13V5.5c0-1.93-1.57-3.5-3.5-3.5H6.5c-1.93,0-3.5,1.57-3.5,3.5v7.5c-1.65,0-3,1.35-3,3v6H24v-6c0-1.65-1.35-3-3-3ZM6,5.5c0-.28,.22-.5,.5-.5h11c.28,0,.5,.22,.5,.5v11.5H6V5.5Zm10.06,3.56l-1.94,1.94,1.94,1.94-2.12,2.12-1.94-1.94-1.94,1.94-2.12-2.12,1.94-1.94-1.94-1.94,2.12-2.12,1.94,1.94,1.94-1.94,2.12,2.12Z"/></svg>
);

FiBsVoteNay.displayName = 'FiBsVoteNay';
