import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLessThan: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,3.361L6.652,12l17.348,8.639v3.361L0,12,24,0v3.361Z"/>
</svg>
);

FiBsLessThan.displayName = 'FiBsLessThan';
