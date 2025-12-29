import React from 'react';
import type { IconProps } from '../../types';

export const Laugh: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,11V10a2,2,0,0,1,4,0v1Zm6.007,8C9.028,19,7,16,7,14H17A5.307,5.307,0,0,1,12.007,19ZM14,11V10a2,2,0,0,1,4,0v1Z"/></svg>
);

Laugh.displayName = 'Laugh';
